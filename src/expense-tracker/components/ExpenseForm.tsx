import { useForm, FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "../categories";

interface Props {
  onSubmit: (data: ExpenseFormData) => void;
}

const schema = z.object({
  description: z.string().min(3, { message: "Description must be atleast 5 characters" }).max(50),
  amount: z
    .number({ invalid_type_error: "Amount is Required" })
    .min(1, { message: "Amount cannot be less than 1" })
    .max(10000),
  category: z.enum(categories, {
    errorMap: () => ({ message: "category is required" }),
  }),
});
type ExpenseFormData = z.infer<typeof schema>;

const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Description
        </label>
        <input {...register("description")} id="description" type="text" className="form-control" />
        {errors.description && <p className="text-danger">{errors.description.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Amount
        </label>
        <input {...register("amount", { valueAsNumber: true })} id="amount" type="number" className="form-control" />
        {errors.amount && <p className="text-danger">{errors.amount.message}</p>}
      </div>
      <div className="mb-3">
        <select className="form-select" {...register("category")} id="category" aria-label="Please Choose an option">
          <option selected>Please Choose an option</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && <p className="text-danger">{errors.category.message}</p>}
      </div>
      <button disabled={!isValid} type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
