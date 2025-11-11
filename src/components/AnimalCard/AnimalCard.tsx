import type { AnimalCardProps } from "./type";
import { AnimalCardWrapper, AnimalImg, Title, AminalSpecies } from "./styles";

function AnimalCard({
  animalName,
  animalSpecies,
  animalImg,
  children,
}: AnimalCardProps) {
  return (
    <AnimalCardWrapper>
      {children}
      <Title>{animalName}</Title>
      <AminalSpecies>{animalSpecies}</AminalSpecies>
      <AnimalImg src={animalImg} />
    </AnimalCardWrapper>
  );
}

export default AnimalCard;