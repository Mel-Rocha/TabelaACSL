import './index.css'
import logo from '../../../../src/assets/logo4.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faDatabase, faCalendar, faFile, faHome } from '@fortawesome/free-solid-svg-icons';
const permission = {
    canViewRawData: "True",
    canAcesseInsights: "True",
    canPricePredict: "True",
}
export default function Menu() {
    return (
        <>
            <div className="menu">
                <img src={logo} alt="" />
                <nav>
                    <ul>
                        <li>
                            <Link to="/adm/Home">
                                <FontAwesomeIcon icon={faHome} size="2x" />
                                <h3>Home</h3>
                            </Link>
                        </li>
                        {
                            permission.canViewRawData === "True" && (
                                <li>
                                    <Link to="/adm/raw-data">
                                        <FontAwesomeIcon icon={faDatabase} size="2x" />
                                        <h3>Dados Brutos</h3>
                                    </Link>
                                </li>
                            )
                        }

                        {
                            permission.canAcesseInsights === "True" && (
                                <li>
                                    <Link to="/adm/insights">
                                        <FontAwesomeIcon icon={faChartLine} size="2x" />
                                        <h3>Informação Inteligente</h3>
                                    </Link>
                                </li>
                            )
                        }
                        {
                            permission.canPricePredict === "True" && (
                                <li>
                                    <Link to="/adm/predict">
                                        <FontAwesomeIcon icon={faCalendar} size="2x" />
                                        <h3>Predição de Preços</h3>
                                    </Link>
                                </li>
                            )
                        }
                    </ul>
                </nav>
            </div>
        </>
    );
}