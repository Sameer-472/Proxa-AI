
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axiosClient from "@/lib/axiosClient";


interface IAuthResponse {
  id: string;
  imageUrlId: string;
  imageUrl: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  message?: string;
  success?: boolean;
  role?: string;
}

interface IAllUserResponse {
  _id: string;
  imageUrlId: string;
  imageUrl: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  message?: string;
  success?: boolean;
  createdAt?: string;
  role?: string;
}


export const useSignUp = () => {
  return useMutation<IAuthResponse, Error, FormData>({
    mutationFn: async (formData: FormData) => {
      const response = await axiosClient.post(`/user/signUp`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    },
  });
};

export const useSignIn = () => {
  return useMutation<IAuthResponse, Error, FormData>({
    mutationFn: async (formData) => {
      const response = await axiosClient.post("/user/login", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    },
  });
};

export const useSignOut = () => {
  return useMutation({
    mutationFn: async () => {
      const response = await axiosClient.post("/user/logout", {}, {
        withCredentials: true,
      });
      return response.data;
    },
  });
};

export const useCheckAuth = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await axiosClient.get("/user/checkAuth", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    },
    staleTime: 0,
    gcTime: 0,
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
};


export const useGetAllUsers = () => {
  return useQuery<IAllUserResponse[], Error>({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const response = await axiosClient.get("/user/get-all-users", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      return response.data;
    },
    staleTime: 0,
    gcTime: 0,
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
};


export const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  return useMutation<IAuthResponse, Error, FormData>({
    mutationFn: async (formData: FormData) => {
      const response = await axiosClient.put(`/user/update-user`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      return response.data;
    },
     onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] }); 
    },
  });
};