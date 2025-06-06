import { useState, useEffect } from 'react';
import './index.css';
import logo from '../../../../src/assets/logo4.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChartLine, faDatabase, faDollarSign, faHome, faChartBar, faFileAlt} from '@fortawesome/free-solid-svg-icons';

export default function Menu() {
    const [permission, setPermission] = useState({
        canViewRawData: "False",
        canAcesseInsights: "False",
        canPricePredict: "False",
        canDataVisualization: "False",
        canFinalReport: "False"
    });

    useEffect(() => {
        // Pega a string do localStorage e converte para booleano corretamente
        const isAdmin = localStorage.getItem("isAdmin") === "true"; // Comparação correta com string "true"

        if (isAdmin) {
            setPermission({
                canViewRawData: "True",
                canAcesseInsights: "True",
                canPricePredict: "True",
                canDataVisualization: "True",
                canFinalReport: "True"
            });
        } else {
            // Se não for admin, pega as permissões do localStorage (se existirem)
            const storedPermissions = JSON.parse(localStorage.getItem("userPermissions")) || {
                canViewRawData: "False",
                canAcesseInsights: "False",
                canPricePredict: "False",
                canDataVisualization: "False",
                canFinalReport: "False"
            };
            setPermission(storedPermissions);
        }
    }, []);

    return (
        <div className="menu">
            <img src={logo} alt="Logo" />
            <nav>
                <ul>
                    <li>
                        <Link to="../Pages/Home">
                            <FontAwesomeIcon icon={faHome} size="2x" />
                            <h3>Inicío</h3>
                        </Link>
                    </li>
                    {permission.canViewRawData === "True" && (
                        <li>
                            <Link to="../Pages/Rawdata">
                                <FontAwesomeIcon icon={faDatabase} size="2x" />
                                <h3>Dados Brutos</h3>
                            </Link>
                        </li>
                    )}
                    {permission.canAcesseInsights === "True" && (
                        <li>
                            <Link to="../Pages/insights">
                                <FontAwesomeIcon icon={faChartLine} size="2x" />
                                <h3>Informação Inteligente</h3>
                            </Link>
                        </li>
                    )}
                    {permission.canPricePredict === "True" && (
                        <li>
                            <Link to="../Pages/predict">
                                <FontAwesomeIcon icon={faDollarSign} size="2x" />
                                <h3>Sugestões de Preços</h3>
                            </Link>
                        </li>
                    )}
                    {permission.canDataVisualization === "True" && (
                        <li>
                            <Link to="../Pages/Dashboard">
                                <FontAwesomeIcon icon={faChartBar} size="2x" />
                                <h3>Visualização de Dados</h3>
                            </Link>
                        </li>
                    )}
                    {permission.canFinalReport === "True" && (
                        <li>
                            <Link to="../Pages/FinalReport">
                                <FontAwesomeIcon icon={faFileAlt} size="2x" />
                                <h3>Relatórios</h3>
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    );
}
