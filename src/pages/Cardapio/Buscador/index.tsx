import style from "./Buscador.module.scss";
import { CgSearch } from "react-icons/cg";

interface Props {
  busca: string;
  setBusca: React.Dispatch<React.SetStateAction<string>>;
}

export default function Buscador({ busca, setBusca}: Props) {
  return (
    <div className={style.buscador}>
      <input
        className={style.buscador}
        value={busca}
        onChange={(event) => setBusca(event.target.value)}
        placeholder='Search'
      />
      <CgSearch size={30} color='$dark-grey'/>
    </div>
  );
}