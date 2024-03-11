import DonationsForm from "@/components/forms/DonationsForm";
import FormSubmit from "@/components/forms/FormSubmit";
import FormWrapper from "@/components/forms/FormWrapper";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const CreateDonation = () => {
  const [loading, setIsLoading] = useState<boolean>(false);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    setIsLoading(true);
    console.log(data);
    reset();
  };

  return (
    <section className="my-20 space-y-10">
      <div className="text-center">
        <h3>Add a Donation</h3>
        <p>Please fill out the form below to add a new donation.</p>
      </div>

      <FormWrapper
        className="w-[90%] md:w-[70%] lg:w-1/2 mx-auto space-y-5"
        onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}
      >
        {/* form  */}
        <DonationsForm register={register} errors={errors} />

        {/* form submit */}
        <FormSubmit loading={loading} title="Submit" />
      </FormWrapper>
    </section>
  );
};

export default CreateDonation;