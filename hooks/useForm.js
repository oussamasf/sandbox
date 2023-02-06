import { useState } from "react";

export default function useForm(initialValue) {
  const [form, setform] = useState(initialValue);
  return [
    form,
    (e) => {
      setform({
        ...form,
        [e.target.name]: e.target.value,
      });
    },
  ];
}
