import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";

const Procesar = () => {
  const location = useLocation();
  const contenido = location.state ? location.state.contenido : null;

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPersonas, setTotalPersonas] = useState<number>(0);

  const [Puntarenas, setPuntarenas] = useState<{
    total: number;
    masculino: number;
    femenino: number;
  }>({
    total: 0,
    masculino: 0,
    femenino: 0,
  });

  const [Cartago, setCartago] = useState<{
    total: number;
    masculino: number;
    femenino: number;
  }>({
    total: 0,
    masculino: 0,
    femenino: 0,
  });

  const [Limon, setLimon] = useState<{
    total: number;
    masculino: number;
    femenino: number;
  }>({
    total: 0,
    masculino: 0,
    femenino: 0,
  });

  const [SanJose, setSanJose] = useState<{
    total: number;
    masculino: number;
    femenino: number;
  }>({
    total: 0,
    masculino: 0,
    femenino: 0,
  });

  const [Heredia, setHeredia] = useState<{
    total: number;
    masculino: number;
    femenino: number;
  }>({
    total: 0,
    masculino: 0,
    femenino: 0,
  });

  const [Guanacaste, setGuanacaste] = useState<{
    total: number;
    masculino: number;
    femenino: number;
  }>({
    total: 0,
    masculino: 0,
    femenino: 0,
  });

  const [Alajuela, setAlajuela] = useState<{
    total: number;
    masculino: number;
    femenino: number;
  }>({
    total: 0,
    masculino: 0,
    femenino: 0,
  });

  const rowsPerPage = 25;
  const totalPages = contenido
    ? Math.ceil((contenido.length - 1) / rowsPerPage)
    : 0;
  const currentRows = contenido
    ? contenido.slice(
        (currentPage - 1) * rowsPerPage + 1,
        currentPage * rowsPerPage + 1
      )
    : [];

  const identificarTipoDato = (valor: any) => {
    if (!isNaN(Number(valor))) {
      return "number";
    }
    if (valor.toLowerCase() === "true" || valor.toLowerCase() === "false") {
      return "boolean";
    }
    if (!isNaN(Date.parse(valor))) {
      return "date";
    }
    return typeof valor;
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  useEffect(() => {
    if (contenido) {
      const updatedStats = {
        Puntarenas: { total: 0, masculino: 0, femenino: 0 },
        Cartago: { total: 0, masculino: 0, femenino: 0 },
        Limon: { total: 0, masculino: 0, femenino: 0 },
        SanJose: { total: 0, masculino: 0, femenino: 0 },
        Heredia: { total: 0, masculino: 0, femenino: 0 },
        Guanacaste: { total: 0, masculino: 0, femenino: 0 },
        Alajuela: { total: 0, masculino: 0, femenino: 0 },
      };

      contenido.forEach((row: any) => {
        const [, , sexo, , , , provincia] = row;

        switch (provincia) {
          case "Puntarenas":
            updatedStats.Puntarenas.total++;
            if (sexo === "M") updatedStats.Puntarenas.masculino++;
            else if (sexo === "F") updatedStats.Puntarenas.femenino++;
            break;
          case "Cartago":
            updatedStats.Cartago.total++;
            if (sexo === "M") updatedStats.Cartago.masculino++;
            else if (sexo === "F") updatedStats.Cartago.femenino++;
            break;
          case "Limón":
            updatedStats.Limon.total++;
            if (sexo === "M") updatedStats.Limon.masculino++;
            else if (sexo === "F") updatedStats.Limon.femenino++;
            break;
          case "San José":
            updatedStats.SanJose.total++;
            if (sexo === "M") updatedStats.SanJose.masculino++;
            else if (sexo === "F") updatedStats.SanJose.femenino++;
            break;
          case "Heredia":
            updatedStats.Heredia.total++;
            if (sexo === "M") updatedStats.Heredia.masculino++;
            else if (sexo === "F") updatedStats.Heredia.femenino++;
            break;
          case "Guanacaste":
            updatedStats.Guanacaste.total++;
            if (sexo === "M") updatedStats.Guanacaste.masculino++;
            else if (sexo === "F") updatedStats.Guanacaste.femenino++;
            break;
          case "Alajuela":
            updatedStats.Alajuela.total++;
            if (sexo === "M") updatedStats.Alajuela.masculino++;
            else if (sexo === "F") updatedStats.Alajuela.femenino++;
            break;
          default:
            break;
        }
      });

      setPuntarenas(updatedStats.Puntarenas);
      setCartago(updatedStats.Cartago);
      setLimon(updatedStats.Limon);
      setSanJose(updatedStats.SanJose);
      setHeredia(updatedStats.Heredia);
      setGuanacaste(updatedStats.Guanacaste);
      setAlajuela(updatedStats.Alajuela);

      setTotalPersonas(
        updatedStats.Puntarenas.total +
          updatedStats.Cartago.total +
          updatedStats.Limon.total +
          updatedStats.SanJose.total +
          updatedStats.Heredia.total +
          updatedStats.Guanacaste.total +
          updatedStats.Alajuela.total
      );
    }
  }, [contenido]);

  return (
    <div>
      <h4>Contenido del archivo</h4>
      <br />

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Total</th>
            <th>Masculino</th>
            <th>Femenino</th>
            <th>% Masculino</th>
            <th>% Femenino</th>
          </tr>
          <hr />
          <br />
          <tr style={{ fontSize: "20px" }}>
            <td>Habitantes Puntarenas: {Puntarenas.total}</td>
            <td>Masculinos: {Puntarenas.masculino}</td>
            <td>Femeninos: {Puntarenas.femenino}</td>
            <td>
              {Puntarenas.total > 0
                ? `${((Puntarenas.masculino / Puntarenas.total) * 100).toFixed(
                    2
                  )}%`
                : "0%"}
            </td>
            <td>
              {Puntarenas.total > 0
                ? `${((Puntarenas.femenino / Puntarenas.total) * 100).toFixed(
                    2
                  )}%`
                : "0%"}
            </td>
          </tr>
          <tr style={{ fontSize: "20px" }}>
            <td>Habitantes Cartago: {Cartago.total}</td>
            <td>Masculinos: {Cartago.masculino}</td>
            <td>Femeninos: {Cartago.femenino}</td>
            <td>
              {Cartago.total > 0
                ? `${((Cartago.masculino / Cartago.total) * 100).toFixed(2)}%`
                : "0%"}
            </td>
            <td>
              {Cartago.total > 0
                ? `${((Cartago.femenino / Cartago.total) * 100).toFixed(2)}%`
                : "0%"}
            </td>
          </tr>
          <tr style={{ fontSize: "20px" }}>
            <td>Habitantes Limón: {Limon.total}</td>
            <td>Masculinos: {Limon.masculino}</td>
            <td>Femeninos: {Limon.femenino}</td>
            <td>
              {Limon.total > 0
                ? `${((Limon.masculino / Limon.total) * 100).toFixed(2)}%`
                : "0%"}
            </td>
            <td>
              {Limon.total > 0
                ? `${((Limon.femenino / Limon.total) * 100).toFixed(2)}%`
                : "0%"}
            </td>
          </tr>
          <tr style={{ fontSize: "20px" }}>
            <td>Habitantes San José: {SanJose.total}</td>
            <td>Masculinos: {SanJose.masculino}</td>
            <td>Femeninos: {SanJose.femenino}</td>
            <td>
              {SanJose.total > 0
                ? `${((SanJose.masculino / SanJose.total) * 100).toFixed(2)}%`
                : "0%"}
            </td>
            <td>
              {SanJose.total > 0
                ? `${((SanJose.femenino / SanJose.total) * 100).toFixed(2)}%`
                : "0%"}
            </td>
          </tr>
          <tr style={{ fontSize: "20px" }}>
            <td>Habitantes Heredia: {Heredia.total}</td>
            <td>Masculinos: {Heredia.masculino}</td>
            <td>Femeninos: {Heredia.femenino}</td>
            <td>
              {Heredia.total > 0
                ? `${((Heredia.masculino / Heredia.total) * 100).toFixed(2)}%`
                : "0%"}
            </td>
            <td>
              {Heredia.total > 0
                ? `${((Heredia.femenino / Heredia.total) * 100).toFixed(2)}%`
                : "0%"}
            </td>
          </tr>
          <tr style={{ fontSize: "20px" }}>
            <td>Habitantes Guanacaste: {Guanacaste.total}</td>
            <td>Masculinos: {Guanacaste.masculino}</td>
            <td>Femeninos: {Guanacaste.femenino}</td>
            <td>
              {Guanacaste.total > 0
                ? `${((Guanacaste.masculino / Guanacaste.total) * 100).toFixed(
                    2
                  )}%`
                : "0%"}
            </td>
            <td>
              {Guanacaste.total > 0
                ? `${((Guanacaste.femenino / Guanacaste.total) * 100).toFixed(
                    2
                  )}%`
                : "0%"}
            </td>
          </tr>
          <tr style={{ fontSize: "20px" }}>
            <td>Habitantes Alajuela: {Alajuela.total}</td>
            <td>Masculinos: {Alajuela.masculino}</td>
            <td>Femeninos: {Alajuela.femenino}</td>
            <td>
              {Alajuela.total > 0
                ? `${((Alajuela.masculino / Alajuela.total) * 100).toFixed(2)}%`
                : "0%"}
            </td>
            <td>
              {Alajuela.total > 0
                ? `${((Alajuela.femenino / Alajuela.total) * 100).toFixed(2)}%`
                : "0%"}
            </td>
          </tr>
        </thead>
      </table>

      <div className="pagination">
        <Button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </Button>
        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Siguiente
        </Button>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            {contenido[2]?.map((item: any, index: number) => (
              <th key={index}>{identificarTipoDato(item)}</th>
            ))}
          </tr>
          <tr>
            {contenido[0]?.map((item: any, index: number) => (
              <th key={index}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentRows.map((row: any, index: number) => (
            <tr key={index}>
              {row.map((item: any, index: number) => (
                <td key={index}>{item}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Procesar;
