import React, { useEffect, useState } from "react";
import Style from "./style.module.scss";
import { Controller, useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import FormErrorMessages from "../formError/formErrorMessage";
import Input from "../input";
import Button from "../button";
import { inputValidPattern } from "../helpers/inputHelpers";
import cn from "classnames";

const ContactForm = () => {
  const [phoneModal, setPhoneModal] = useState(false);

  useEffect(() => {
    const specialLabel = document.querySelector(".special-label");

    if (specialLabel && specialLabel.textContent === "Phone") {
      specialLabel.textContent = "Telefon";
    }
  }, []);

  const {
    register,
    watch,
    formState: { errors, isDirty },
    handleSubmit,
    control,
    reset,
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
        nameSurname: "",
        company: "",
        phone: "+90",
        mail: "",
        message: "",
      });
      setPhoneModal(true);
    }
  };
  const togglePhone = () => {
    setPhoneModal((prevPhoneModal) => !prevPhoneModal);
  };

  const validateWordCount = (value) => {
    const words = value.trim().split(/\s+/);
    if (words.length < 2) {
      return "En az iki kelime olmalıdır.";
    }
    return true;
  };

  return (
    <div className={cn("container", Style.custom)}>
      <form
        className={Style.form}
        onSubmit={handleSubmit((data) => onSubmit(data))}
      >
        <h3>Kayıt Formu</h3>
        <div className={Style.formRow}>
          <div className={Style.formCol}>
            <Controller
              name="nameSurname"
              control={control}
              defaultValue=""
              rules={{
                validate: validateWordCount,
              }}
              register={register("nameSurname", {
                required: {
                  value: true,
                  message: "Lütfen bir isim giriniz.",
                },
                minLength: {
                  value: 2,
                  message: "Eksik isim girdiniz.",
                },
              })}
              render={({ field }) => {
                return (
                  <Input
                    type="text"
                    className="input"
                    // placeholder="Ad"
                    label="Ad Soyad"
                    error={errors?.nameSurname}
                    {...field}
                  />
                );
              }}
            />
            <FormErrorMessages error={errors?.nameSurname} />
          </div>
          <div className={Style.formCol}>
            <Controller
              name="company"
              control={control}
              defaultValue=""
              register={register("company", {
                required: {
                  value: true,
                  message: "Lütfen bir soyisim giriniz",
                },
                minLength: {
                  value: 2,
                  message: "Eksik soyisim girdiniz.",
                },
              })}
              render={({ field }) => (
                <Input
                  type="text"
                  className="input"
                  //   placeholder="Soyad"
                  label="Firma İsmi"
                  error={errors?.company}
                  {...field}
                />
              )}
            />
            <FormErrorMessages error={errors?.company} />
          </div>
        </div>

        <div className={cn(Style.formRow, Style.reverse)}>
          <div className={Style.formCol}>
            <div
              className={`phone-input-group ${
                !!errors?.phone ? "has-error" : ""
              }`}
            >
              {/* <label>Telefon</label> */}
              <Controller
                name="phone"
                control={control}
                defaultValue=""
                register={register("phone", {
                  required: {
                    value: true,
                    message: "Lütfen bir numara giriniz.",
                  },
                  minLength: {
                    value: 10,
                    message: "Eksik numara girdiniz.",
                  },
                })}
                render={({ field }) => (
                  <PhoneInput
                    country={"tr"}
                    enableSearch={true}
                    //   onChange={(phone) => setPhone(phone)}
                    error={errors?.phone}
                    {...field}
                  />
                )}
              />
              <FormErrorMessages error={errors?.phone} />
            </div>
          </div>
          <div className={Style.formCol}>
            <Controller
              name="mail"
              control={control}
              defaultValue=""
              register={register("mail", {
                required: {
                  value: true,
                  message: "Lütfen bir mail adresi giriniz",
                },
                pattern: {
                  value: inputValidPattern.mail,
                  message: "Hatalı mail adresi",
                },
              })}
              render={({ field }) => (
                <Input
                  type="mail"
                  className="input"
                  // placeholder="E-Mail"
                  label="E-Mail"
                  error={errors?.mail}
                  {...field}
                />
              )}
            />
            <FormErrorMessages error={errors?.mail} />
          </div>
        </div>

        <div className={Style.areaRow}>
          <div className={Style.formCol}>
            <div className={Style.textArea}>
              <label>Açıklama</label>
              <textarea
                //   placeholder="Mesaj Giriniz"
                name="message"
                defaultValue=""
                className="textarea-control"
                control={control}
                {...register("message", {
                  required: {
                    value: true,
                    message: "Lütfen bir metin yazınız.",
                  },
                  minLength: {
                    value: 50,
                    message: "Eksik karakter.",
                  },
                })}
              />
              <FormErrorMessages error={errors?.message} />
            </div>
          </div>
        </div>

        <div className="form-col form-button">
          <Button disabled={!isActiveSendButton}>Kayıt Ol</Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
