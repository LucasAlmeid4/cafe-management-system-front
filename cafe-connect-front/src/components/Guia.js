import React from "react";
import "../css/Guia.css";
import { Link } from "react-router-dom";

const Guia = () => {
    return (
        <div className="container">
            <h1 className="text-center">Passo a Passo e Regras</h1>
            <table className="guia-table">
                <tbody>
                <tr>
                    <td className="step-number">1</td>
                    <td className="step-text">
                        Cadastre a Data que marcou com a Equipe
                    </td>
                </tr>
                <tr>
                    <td className="step-number">2</td>
                    <td className="step-text">
                        Cadastre as opções de café da manhã (por exemplo, se for temático)
                    </td>
                </tr>
                <tr>
                    <td className="step-number">3</td>
                    <td className="step-text">
                        Faça o pré-cadastro antes de confirmar presença
                    </td>
                </tr>
                <tr>
                    <td className="step-number">4</td>
                    <td className="step-text">
                        <span className="step-text-title">Confirme presença escolhendo:</span>
                        <ul className="sub-steps">
                            <li>1-Nome na lista de pré-cadastro</li>
                            <li>2-Opção do café da manhã</li>
                            <li>3-Data marcada com a equipe</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td className="step-number">5</td>
                    <td className="step-text">
                        <span className="step-text-title">Regras:</span>
                        <ul className="sub-steps">
                            <li>Divirta-se e aproveite o momento</li>
                            <li style={{ color: "red" }}>
                                Não se pode excluir registros que já confirmaram presença!
                            </li>

                            <li style={{ color: "red" }}>
                                Apenas uma pessoa da equipe pode gerenciar os cadastros!
                            </li>

                            <li>
                                <Link className="links" to="/gerenciar">
                                    Gerenciar
                                </Link>
                            </li>
                        </ul>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Guia;
