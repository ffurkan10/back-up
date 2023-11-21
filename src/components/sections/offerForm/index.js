import React, { useEffect, useState } from "react";
import Style from "./style.module.scss";
import { Controller, useForm } from "react-hook-form";
import FormErrorMessages from "../../formError/formErrorMessage";
import Input from "../../input";
import cn from "classnames";
import Checkbox from "../../checkbox";
import MapCard from "../../map";
import * as FaIcons from "react-icons/fa6";
import Button from "../../button";
import Select from "react-select";
import LocationData from "../../../utils/index";
import Modal from "../../modal";
import { useNavigate } from "react-router-dom";

const listOptions = [
  {
    value: "Komple",
    text: "Komple Yük",
  },
  {
    value: "Parça",
    text: "Parça Yük",
  },
];

const OfferForm = () => {
  const [isCheck, setIsCheck] = useState("");
  const [kkvkCheck, setKkvkCheck] = useState(false);

  const [searchTermNereden, setSearchTermNereden] = useState("");
  const [searchTermNereye, setSearchTermNereye] = useState("");

  const [filteredNereden, setFilteredNereden] = useState([]);
  const [filteredNereye, setFilteredNereye] = useState([]);

  const [selectedNereye, setSelectedNereye] = useState("");
  const [selectedNereden, setSelectedNereden] = useState("");

  const [yukelemeLatLang, setYuklemeLatLang] = useState(null);
  const [bosaltmaLatLang, setBosaltmaLatLang] = useState(null);

  const navigate = useNavigate();

  // const [modal, setModal] = useState(false);

  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
    control,
    reset,
    setValue,
  } = useForm({
    mode: "all",
  });

  const watchAllFields = watch();
  const [isActiveSendButton, setIsActiveSendButton] = useState(false);
  useEffect(() => {
    const formDataArray = Object.entries(watchAllFields);
    const errorsLength = Object.keys(errors).length;
    const isActive = formDataArray.every((item) => item[1]);
    setIsActiveSendButton(isActive && errorsLength === 0);
  }, [watchAllFields]);

  const onSubmit = () => {
    if (handleSubmit) {
      reset({
        kompleParca: "",
        nereden: "",
        nereye: "",
        yuklemeTarih: "",
        aracTuru: "",
        yukTuru: "",
        agirlik: "",
        message: "",
        fiyat: "",
        odeme: "",
      });
      // setModal(true);
      navigate("/hizli-teklif-basari");
    }
    setBosaltmaLatLang(null);
    setYuklemeLatLang(null);
    setIsCheck(false);
    setKkvkCheck(false);
  };

  const watchedValues = watch([
    "yuklemeTarih",
    "nereden",
    "nereye",
    "aracTuru",
    "kompleParca",
    "yukTuru",
    "agirlik",
    "message",
    "fiyat",
    "odeme",
  ]);

  const fieldNames = [
    "yuklemeTarih",
    "nereden",
    "nereye",
    "aracTuru",
    "kompleParca",
    "yukTuru",
    "agirlik",
    "message",
    "fiyat",
    "odeme",
  ];

  const mappedValues = fieldNames.map((fieldName, index) => ({
    [fieldName]: watchedValues[index],
  }));

  const handleOptionClick = (value) => {
    setIsCheck((prevIsCheck) => (prevIsCheck === value ? "" : value));
  };

  const handleSearch = (event) => {
    const term = event.target.value?.toLowerCase();
    setSearchTermNereden(term);
    const filteredDatas = LocationData.filter((search) =>
      search.location?.toLowerCase()?.includes(term)
    );
    setFilteredNereden(filteredDatas);
  };

  const handleNereye = (event) => {
    const term = event.target.value?.toLowerCase();
    setSearchTermNereye(term);
    const filteredDatas = LocationData.filter((search) =>
      search.location?.toLowerCase()?.includes(term)
    );
    setFilteredNereye(filteredDatas);
  };

  const handleLocationClick = (location, latlng) => {
    setSelectedNereye(location);
    setSearchTermNereye("");
    setFilteredNereye([]);
    setValue("nereye", location);
    setBosaltmaLatLang(latlng);
  };

  const handleNeredenClick = (location, latlng) => {
    setSelectedNereden(location);
    setSearchTermNereden("");
    setFilteredNereden([]);
    setValue("nereden", location);
    setYuklemeLatLang(latlng);
  };

  // const toggleModal = () => {
  //   setModal((prevModal) => !prevModal);
  // };

  return (
    <div className={cn("container", Style.customContainer)}>
      <p className={Style.title}>Hızlı Teklif Al</p>
      <div className={Style.offerForm}>
        <form
          className={Style.form}
          onSubmit={handleSubmit((data) => onSubmit(data))}
        >
          <div className={cn(Style.formRow, Style.formDisplayCheck)}>
            <div className={Style.formCol}>
              <Controller
                name="kompleParca"
                control={control}
                defaultValue=""
                register={register("kompleParca", {})}
                render={({ field }) => (
                  <>
                    <div className={Style.list}>
                      {listOptions?.map((item) => (
                        <div
                          key={item.value}
                          className={Style.listItem}
                          onClick={() => {
                            handleOptionClick(item.value);
                            field.onChange(item.value);
                          }}
                        >
                          <span
                            className={cn({
                              [Style.select]: isCheck === item.value,
                              [Style.none]: isCheck !== item.value,
                            })}
                          >
                            {isCheck === item.value ? <FaIcons.FaCheck /> : ""}
                          </span>
                          <div className="text">{item.text}</div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              />
            </div>
          </div>

          <div className={cn(Style.formRow)}>
            <div className={Style.formCol}>
              <Controller
                name="nereden"
                control={control}
                defaultValue=""
                register={register("nereden", {
                  required: {
                    value: true,
                    message: "Lütfen bir konum giriniz.",
                  },
                  minLength: {
                    value: 2,
                    message: "Eksik konum girdiniz.",
                  },
                })}
                render={({ field }) => {
                  return (
                    <Input
                      handleSearch={(e) => {
                        field?.onChange(e);
                        handleSearch(e);
                      }}
                      value={searchTermNereden}
                      type="text"
                      className="input"
                      label="Nereden*"
                      error={errors?.nereden}
                      {...field}
                    />
                  );
                }}
              />
              {searchTermNereden?.length > 0 && (
                <div className={Style.neredenDrop}>
                  {filteredNereden?.map((data) => (
                    <p
                      key={data.location}
                      onClick={() =>
                        handleNeredenClick(data.location, {
                          lat: data?.lat,
                          lng: data?.lng,
                        })
                      }
                    >
                      {data.location}
                    </p>
                  ))}
                </div>
              )}

              <FormErrorMessages error={errors?.nereden} />
            </div>
            <div className={Style.formCol}>
              <Controller
                name="nereye"
                control={control}
                defaultValue=""
                register={register("nereye", {
                  required: {
                    value: true,
                    message: "Lütfen bir konum giriniz",
                  },
                  minLength: {
                    value: 2,
                    message: "Eksik konum girdiniz.",
                  },
                })}
                render={({ field }) => (
                  <Input
                    handleSearch={(e) => {
                      field?.onChange(e);
                      handleNereye(e);
                    }}
                    value={searchTermNereye}
                    type="text"
                    className="input"
                    label="Nereye*"
                    error={errors?.nereye}
                    {...field}
                  />
                )}
              />
              {searchTermNereye.length > 0 && (
                <div className={Style.neredenDrop}>
                  {filteredNereye?.map((data) => (
                    <p
                      key={data.location}
                      onClick={() =>
                        handleLocationClick(data.location, {
                          lat: data?.lat,
                          lng: data?.lng,
                        })
                      }
                    >
                      {data.location}
                    </p>
                  ))}
                </div>
              )}
              <FormErrorMessages error={errors?.nereye} />
            </div>
          </div>

          <div className={cn(Style.formRow, Style.formDisplay)}>
            <div className={Style.formCol}>
              <Controller
                name="yuklemeTarih"
                control={control}
                className={Style.date}
                defaultValue=""
                register={register("yuklemeTarih", {
                  required: {
                    value: true,
                    message: "Lütfen bir tarih giriniz",
                  },
                  minLength: {
                    value: 2,
                    message: "Eksik tarih girdiniz.",
                  },
                })}
                render={({ field }) => (
                  <Input
                    type="date"
                    className="date"
                    label="Yükleme Tarihi"
                    error={errors?.yuklemeTarih}
                    {...field}
                  />
                )}
              />
              <FormErrorMessages error={errors?.yuklemeTarih} />
            </div>
            <div className={Style.formCol}>
              <Controller
                name="aracTuru"
                control={control}
                defaultValue=""
                register={register("aracTuru", {
                  required: {
                    value: true,
                    message: "Lütfen bir araç türü giriniz",
                  },
                })}
                render={({ field }) => (
                  <Input
                    type="aracTuru"
                    className="input"
                    label="Araç Türü Seçiniz"
                    error={errors?.aracTuru}
                    {...field}
                  />
                )}
              />
              <FormErrorMessages error={errors?.aracTuru} />
            </div>
          </div>

          <div className={cn(Style.formRow)}>
            <div className={Style.formCol}>
              <Controller
                name="yukTuru"
                control={control}
                defaultValue=""
                register={register("yukTuru", {
                  required: {
                    value: true,
                    message: "Lütfen bir tür giriniz",
                  },
                  minLength: {
                    value: 2,
                    message: "Eksik tür girdiniz.",
                  },
                })}
                render={({ field }) => (
                  <Input
                    type="text"
                    className="input"
                    label="Yükleme Türü"
                    error={errors?.yukTuru}
                    {...field}
                  />
                )}
              />
              <FormErrorMessages error={errors?.yukTuru} />
            </div>
            <div className={Style.formCol}>
              <Controller
                name="agirlik"
                control={control}
                defaultValue=""
                register={register("agirlik", {
                  required: {
                    value: true,
                    message: "Lütfen bir ağırlık giriniz",
                  },
                })}
                render={({ field }) => (
                  <Input
                    type="number"
                    className="input"
                    label="Yükün Toplam Ağırlığı(Ton)*"
                    error={errors?.agirlik}
                    {...field}
                  />
                )}
              />
              <FormErrorMessages error={errors?.agirlik} />
            </div>
          </div>

          <div className={Style.areaRow}>
            <div className={Style.formCol}>
              <div className={Style.textArea}>
                <label>Sürücü Başka Neyi Bilmeli? / Neye Dikkat Etmeli?</label>
                <textarea
                  name="message"
                  defaultValue=""
                  className="textarea-control"
                  control={control}
                  {...register("message", {
                    required: {
                      value: true,
                      message: "Lütfen bir metin yazınız.",
                    },
                  })}
                />
                <FormErrorMessages error={errors?.message} />
              </div>
            </div>
          </div>

          <div className={cn(Style.formRow)}>
            <div className={Style.formCol}>
              <Controller
                name="fiyat"
                control={control}
                defaultValue=""
                register={register("fiyat", {
                  required: {
                    value: true,
                    message: "Lütfen bir fiyat giriniz",
                  },
                  minLength: {
                    value: 2,
                    message: "Eksik fiyat girdiniz.",
                  },
                })}
                render={({ field }) => (
                  <Input
                    type="number"
                    className="input"
                    label="Hedef Fiyat"
                    error={errors?.fiyat}
                    {...field}
                  />
                )}
              />
              <FormErrorMessages error={errors?.fiyat} />
            </div>
            <div className={Style.formCol}>
              <Controller
                name="odeme"
                control={control}
                defaultValue=""
                register={register("odeme", {
                  required: {
                    value: true,
                    message: "Lütfen bir odeme giriniz",
                  },
                })}
                render={({ field }) => (
                  <Input
                    type="text"
                    className="input"
                    label="Ödeme Şekli Seçiniz"
                    error={errors?.odeme}
                    {...field}
                  />
                )}
              />
              <FormErrorMessages error={errors?.odeme} />
            </div>
          </div>

          <div className={Style.formRow}>
            <div className={Style.formCol}>
              <Controller
                name="kvkk"
                control={control}
                defaultValue=""
                register={register("kvkk", {
                  required: true,
                })}
                render={({ field }) => (
                  <div className={Style.kkvk}>
                    <div
                      onClick={() => {
                        setKkvkCheck(!kkvkCheck);
                        field.onChange(!kkvkCheck);
                      }}
                      className={cn(
                        Style.kkvkContainer,
                        kkvkCheck ? Style.selectKkvk : ""
                      )}
                    >
                      {kkvkCheck ? <FaIcons.FaCheck /> : ""}
                    </div>
                    <p
                      dangerouslySetInnerHTML={{
                        __html:
                          "Kişisel verilerimin kaydedilmesine ve işlenmesine Açık Rıza veriyorum",
                      }}
                    ></p>
                  </div>
                )}
              />
              <FormErrorMessages error={errors?.kvkk} />
            </div>
          </div>
          <div className={Style.btn}>
            <Button>Hızlı Teklif Al!</Button>
          </div>
        </form>

        <div className={Style.map}>
          <MapCard
            yukelemeLatLang={yukelemeLatLang}
            bosaltmaLatLang={bosaltmaLatLang}
            isCheck={isCheck}
            data={mappedValues}
          />
        </div>

        {/* <Modal isOpen={modal} toggle={toggleModal} className="loginPortalModal">
          <div>
            <p>Form Başarılı Bir Şekilde İletildi</p>
            <a target="_blank" href="/">
              Anasayfaya Dön
            </a>
          </div>
        </Modal> */}
      </div>
    </div>
  );
};

export default OfferForm;
