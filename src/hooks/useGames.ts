import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import useData from "./useData";

export interface Platform{
  id:number,
  name:string,
  slug:string
}

export interface Game {
    id: number;
    name: string;
    background_image: string
    parent_platforms: {platform: Platform}[]
  }

const useGames = () => useData<Game>('/games');

export default useGames