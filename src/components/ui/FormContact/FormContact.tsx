"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  FullWidthField,
  NoteForm,
  TextAreaCustom,
  ListRadioWrapper,
  NoteWrapper,
} from "./styles";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/FormCheckbox";
import { FormItem } from "@/components/ui/FormItem";
import { Radio } from "@/components/ui/FormRadio";
import { Input } from "@/components/ui/InputForm/InputForm";
import ArrowRight from "@/styles/assets/arrow-right.png";
export type FormField = {
  fullname: string;
  company?: string;
  email: string;
  phone: string;
  service: string;
  notes: string;
  agree?: string;
};

export const FormContact = () => {
  const { handleSubmit, control } = useForm<FormField>();
  const onSubmit = (data: FormField) => {
    return data;
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FullWidthField>
        <Controller
          name="fullname"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => {
            return (
              <FormItem label="お名前（必須）" required={true}>
                <Input
                  onChange={onChange}
                  value={value}
                  placeholder="お名前が入ります"
                  name="fullname"
                />
              </FormItem>
            );
          }}
        />
      </FullWidthField>
      <FullWidthField>
        <Controller
          name="company"
          control={control}
          rules={{
            required: false,
          }}
          render={({ field: { onChange, value } }) => {
            return (
              <FormItem label="会社名（必須)" required={true}>
                <Input
                  onChange={onChange}
                  value={value}
                  placeholder="貴社名が入ります"
                  name="company"
                />
              </FormItem>
            );
          }}
        />
      </FullWidthField>
      <FullWidthField>
        <Controller
          name="email"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => {
            return (
              <FormItem label="メールアドレス（必須）" required={true}>
                <Input
                  onChange={onChange}
                  value={value}
                  placeholder="sample@sample.co.jp"
                  name="email"
                />
              </FormItem>
            );
          }}
        />
      </FullWidthField>
      <FullWidthField>
        <Controller
          name="phone"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => {
            return (
              <FormItem label="電話番号" required={true}>
                <Input
                  onChange={onChange}
                  value={value}
                  placeholder="012-0000-0000"
                  name="phone"
                />
              </FormItem>
            );
          }}
        />
      </FullWidthField>
      <FullWidthField>
        <Controller
          name="service"
          control={control}
          rules={{
            required: true,
          }}
          render={() => (
            <>
              <FormItem label="お問い合わせ項目（必須）" required={true}>
                <ListRadioWrapper>
                  <Radio
                    value={1}
                    label="サービスを利用したい"
                    name="service"
                  />
                  <Radio
                    value={2}
                    label="サービス詳細、エンジニアについて聞きたい"
                    name="service"
                  />
                  <Radio
                    value={3}
                    label="サービスを利用したい"
                    name="service"
                  />
                  <Radio value={4} label="メルマガに申し込む" name="service" />
                  <Radio value={5} label="その他" name="service" />
                </ListRadioWrapper>
              </FormItem>
            </>
          )}
        />
      </FullWidthField>
      <FullWidthField>
        <Controller
          name="notes"
          control={control}
          render={() => (
            <FormItem label="お問い合わせ項目（必須）" required={false}>
              {" "}
              <TextAreaCustom placeholder="お問い合わせの内容をご記載ください" />
            </FormItem>
          )}
        />
      </FullWidthField>
      <FullWidthField>
        <NoteForm></NoteForm>
      </FullWidthField>
      <FullWidthField>
        <NoteWrapper>
          <NoteForm>
            お問い合わせにおける個人情報の取り扱いについて
            <br />
            株式会社アイ・ディ・エイチ（以下「当社」といいます。） <br />
            が、お問い合わせフォーム（以下「本フォーム」といいます。）における、個人情報を含む利用者情報の取扱いについては以下のとおりといたします。
          </NoteForm>
        </NoteWrapper>
      </FullWidthField>
      <FullWidthField>
        <Controller
          name="agree"
          control={control}
          render={() => <Checkbox label="個人情報の取扱いについて同意する。" />}
        />
      </FullWidthField>
      <Button text="Submit" icon={ArrowRight.src} />
    </form>
  );
};
FormContact.displayName = "FormContact";
