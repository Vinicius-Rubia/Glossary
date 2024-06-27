import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { images } from "@/utils";
import { Search } from "lucide-react";
import React from "react";
import * as C from "./styles";

const terms = [
  {
    id: 0,
    title: "MOP",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus ad fugit rem veritatis quis dolor vitae voluptate at, sapiente natus incidunt, sunt accusamus odit a, corrupti iste sit itaque molestiae.",
  },
  {
    id: 1,
    title: "PAY TV",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus ad fugit rem veritatis quis dolor vitae voluptate at, sapiente natus incidunt, sunt accusamus odit a, corrupti iste sit itaque molestiae.",
  },
  {
    id: 2,
    title: "Acordo Piloto",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus ad fugit rem veritatis quis dolor vitae voluptate at, sapiente natus incidunt, sunt accusamus odit a, corrupti iste sit itaque molestiae.",
  },
  {
    id: 3,
    title: "Saldo Zero",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus ad fugit rem veritatis quis dolor vitae voluptate at, sapiente natus incidunt, sunt accusamus odit a, corrupti iste sit itaque molestiae.",
  },
  {
    id: 4,
    title: "D -1",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus ad fugit rem veritatis quis dolor vitae voluptate at, sapiente natus incidunt, sunt accusamus odit a, corrupti iste sit itaque molestiae.",
  },
];

export const Home: React.FC = () => {
  return (
    <C.Container>
      <C.Title>Explore o Glossário Corporativo</C.Title>
      <C.SubTitle>Navegue pelos termos específicos de cada empresa.</C.SubTitle>

      <C.Form>
        <Select>
          <SelectTrigger className="max-w-72">
            <SelectValue placeholder="Escolha a empresa" />
          </SelectTrigger>
          <SelectContent className="bg-black">
            <SelectGroup>
              <SelectItem value="negocieonline">Negocie Online</SelectItem>
              <SelectItem value="sky">SKY</SelectItem>
              <SelectItem value="neoenergia">Neo Energia</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className="flex max-w-72 w-full items-center space-x-2">
          <Input
            type="text"
            placeholder="Pesquise pelo termo"
            className="bg-transparent"
          />
          <Button
            type="submit"
            size="icon"
            className="p-1 bg-white/40 hover:bg-white hover:text-black w-12"
          >
            <Search />
          </Button>
        </div>
      </C.Form>

      <Card className="bg-black text-white relative">
        <img src={images.iconReact} className="absolute -top-10 -left-10 -z-10" alt="Icon React" />
        <img src={images.iconCompass} className="absolute -bottom-10 right-10 -z-10" alt="Icon Compass" />
        <CardHeader>
          <CardTitle className="text-center text-base">Resultados</CardTitle>
          <CardDescription className="text-white/70 text-center text-xs">
            Se não encontrou o que precisa tente procurar por outro termo.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {terms.map((item) => (
            <div
              className="border border-white/30 rounded-lg py-2 px-3.5"
              key={item.id}
            >
              <CardTitle className="text-base pb-2">{item.title}:</CardTitle>
              <CardDescription className="text-white/70 text-xs">
                {item.description}
              </CardDescription>
            </div>
          ))}
        </CardContent>
        {/* <CardFooter>
          <p>Card Footer</p>
        </CardFooter> */}
      </Card>
    </C.Container>
  );
};
