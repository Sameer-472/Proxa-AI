import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import axiosClient from "@/lib/axiosClient";
import { AxiosError } from "axios";


interface IUser {
    _id?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    imageUrl?: string;
}

interface IFeedback {
    _id?: string;
    feedback: string;
    userId?: IUser;
    createdAt?: string;
    message?: string;
    success?: boolean;
}

interface IFeedbackResponse {
    data: IFeedback[];
    success: boolean;
    message: string;
}

interface IErrorResponse {
  message: string;
  success?: boolean;
}

export const useSubmitFeedback = () => {
    const queryClient = useQueryClient();

    return useMutation<IFeedback, AxiosError<IErrorResponse>, { feedback: string }>({
        mutationFn: async ({ feedback }) => {
            const response = await axiosClient.post("/feedback/create-feedback-form", { feedback }, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            });
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["feedback"] });
        },
    });
}

export const useGetFeedback = () => {
    return useQuery<IFeedbackResponse, AxiosError<IErrorResponse>>({
        queryKey: ["feedback"],
        queryFn: async () => {
            const response = await axiosClient.get("/feedback/get-feedback-forms", {
                withCredentials: true,
            });
            return response.data;
        },
        refetchOnWindowFocus: false,
    });
}