import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import useData from "./useData";
import { Genres } from "./useGenres";
import { GameQuery } from "../App";

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

const useGames = (gameQuery: GameQuery) => useData<Game>('/games', {params: {genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id}},[gameQuery]);

export default useGames