import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axiosClient from "@/lib/axiosClient";
import { AxiosError } from "axios";

interface IPlanResponse {
  message: string;
  success: boolean;
  id: string;
  planName: string;
  price: number;
  content: string[];
  createdAt: string;
}

interface GetPlansResponse {
  message: string;
  success: boolean;
  data: IPlanResponse[];
}

interface IErrorResponse {
  message: string;
  success?: boolean;
}

export const useCreatePlan = () => {
  const queryClient = useQueryClient();

  return useMutation<IPlanResponse, AxiosError<IErrorResponse>, FormData>({
    mutationFn: async (formData: FormData) => {
      const response = await axiosClient.post(
        "/plan/create-payment-plan",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["plans"] }); // 🔁 Auto re-fetch
    },
  });
};

export const useGetPlans = () => {
  return useQuery<GetPlansResponse>({
    queryKey: ["plans"],
    queryFn: async () => {
      const response = await axiosClient.get("/plan/get-payment-plans", {
        withCredentials: true,
      });
      return response.data;
    },
  });
};
