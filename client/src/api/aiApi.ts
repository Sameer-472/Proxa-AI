import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosClient from "@/lib/axiosClient";
import { AxiosError } from "axios";


interface IBlogResponse {
    id?: string,
    question: string;
    category: string;
    createdAt?: string;
    message?: string;
    success?: boolean;
}


interface IErrorResponse {
  message: string;
  success?: boolean;
}

export const useGenerateBlog = () => {
    const queryClient = useQueryClient();

    return useMutation<IBlogResponse, AxiosError<IErrorResponse>, { question: string; category: string }>({
        mutationFn: async ({ question, category }) => {
            const response = await axiosClient.post("/ai/blog-generate", { question, category }, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            });
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["blogs"] });
        },
    });
};


interface IArticleResponse {
    id?: string;
    question: string;
    createdAt?: string;
    message?: string;
    success?: boolean;
}

export const useGenerateArticle = () => {
    const queryClient = useQueryClient();

    return useMutation<IArticleResponse, AxiosError<IErrorResponse>, { question: string }>({
        mutationFn: async ({ question }) => {
            const response = await axiosClient.post("/ai/article-generate", { question }, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            });
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["articles"] });
        },
    });
}

interface IImageGenerateResponse {
    id?: string;
    context: string;
    style: string;
    message?: string;
    success?: boolean;
    createdAt?: string;
}

export const useGenerateImage = () => {
    const queryClient = useQueryClient();

    return useMutation<IImageGenerateResponse, AxiosError<IErrorResponse>, { context: string; style: string }>({
        mutationFn: async ({ context, style }) => {
            const response = await axiosClient.post("/ai/image-generate", { context, style }, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            });
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["images"] });
        },
    });
};


interface IResumeAnalysisResponse {
    id?: string;
    analysis: File | null;
    message?: string;
    success?: boolean;
    createdAt?: string;
}


export const useResumeAnalysis = () => {
    const queryClient = useQueryClient();

    return useMutation<IResumeAnalysisResponse, AxiosError<IErrorResponse>, FormData>({
        mutationFn: async (formData) => {
            const response = await axiosClient.post("/ai/resume-analyze", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                withCredentials: true,
            });
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["resumes"] });
        },
    });
};