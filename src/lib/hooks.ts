import useSWR from "swr";
import { fetchApi, getMe } from "./api";
import useSWRInfinite from "swr/infinite";
import useSWRImmutable from "swr/immutable"
import { useEffect, useMemo, useState } from "react";
import Router from 'next/router'
import { updateMe, deleteToken, getLocalities, getProvinces } from "@/lib/api";
import { Product, User } from "@/types";


export function useMe(): {
  data: User | null;
  error: any;
  isLoading: boolean;
  mutate: any;
  isValidating: boolean;
  updateData: (newData: any) => void

} {
  const { data, error, isLoading, mutate, isValidating } = useSWR("/me", getMe, {
    shouldRetryOnError: false,
    errorRetryCount: 2
  });

  const updateData = async (newData: any) => {
    await updateMe(newData);
    mutate();
  }

  return { data, error, isLoading, updateData, isValidating, mutate };
}
export function useSession(
  {
    redirectTo = '',
    redirectIfFound = false,
  }
) {
  const { data, isLoading, isValidating, mutate } = useMe(
  )
  useEffect(() => {
    if (!redirectTo || isLoading || isValidating) return
    if (
      (redirectTo && !redirectIfFound && !data) ||
      (redirectIfFound && data)
    ) {
      Router.push(redirectTo)
    }
  }, [data, redirectIfFound, redirectTo, isLoading, isValidating])


  const logout = () => {
    mutate(null, false);
    deleteToken();
  }

  return {
    logout,
    session: !data
  }
}

export function useProducts(query: string, limit = 5) {
  const { data, error, isLoading, size, setSize, isValidating } =
    useSWRInfinite(
      (pageIndex, previousPageData) => {
        if (pageIndex === 0) {
          return `/search?q=${query}&limit=${limit}&offset=0`;
        }
        if (previousPageData.results.length === 0) {
          return null;
        }
        return query && `/search?q=${query}&limit=${limit}&offset=${pageIndex * limit}`;
      },
      fetchApi,
      {
        revalidateAll: false,
        revalidateFirstPage: false,
      }
    );

  const products: Product[] = useMemo(() => {
    if (!data) return [];
    return data.flatMap((page) => page.results);
  }, [data]);
  const totalProducts = data && data[data.length - 1]?.pagination.total;
  const theEndScroll = totalProducts === products.length;

  return {
    products,
    totalProducts,
    theEndScroll,
    error,
    loading: isLoading,
    setSize,
    size,
    isValidating,
  };
}

export function useProduct(productId: string) {
  const { data, error, isLoading } = useSWRImmutable(productId && `/products/${productId}`, fetchApi)
  return { product: data?.product, error, isLoading }

}

export function useLocationSelector() {
  const { data: provinces } = useSWRImmutable("/provinces", getProvinces)
  const [cities, setCities] = useState([])

  const getCities = (provincia: string) => {
    if (!provincia) return
    getLocalities(provincia).then((cities) => {
      setCities(cities)
    })
  }

  return { provinces, cities, getCities }
}
export function useOrder(orderId: string) {
  const { data, error, isLoading } = useSWRImmutable(orderId && `/order/${orderId}`, fetchApi)
  return { order: data?.order, error, loading: isLoading }
}