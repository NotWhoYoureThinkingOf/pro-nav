import React, { useEffect, useState } from "react";
import "./P95Main.css";
import bg from "../../assets/P95.png";
import logo from "../../assets/sprintray-white.png";
import usb from "../../assets/usb-stick2.png";
import {
  ChevronLeft,
  ChevronRight,
  Settings,
  Wifi,
  SignalWifi4Bar,
  SignalWifi3Bar,
  SignalWifi2Bar,
  SignalWifi1Bar,
  SignalWifi0Bar,
  WifiTethering,
  VpnKey,
  AccountBox,
  GetApp,
} from "@material-ui/icons";
import {
  Link,
  Switch,
  Route,
  useHistory,
  useLocation,
  useParams,
} from "react-router-dom";
import keyboardLetters from "../../keyboard";
import WifiStatus from "./components/WifiStatus";
import About from "./components/About";
import PrintFromRayware from "./components/PrintFromRayware";
import PrintFromUSB from "./components/PrintFromUSB";
import UsbSelect from "./components/UsbSelect";
import UsbDirections from "./components/UsbDirections";
import UsbFinal from "./components/UsbFinal";
import Lid from "./components/Lid";
import Grayscale from "./components/Grayscale";
import Language from "./components/Language";
import Ethernet from "./components/Ethernet";
import TankHeating from "./components/TankHeating";
import ReinforcedSupports from "./components/ReinforcedSupports";

const P95Main = () => {
  const params = useParams();
  const history = useHistory();
  const location = useLocation();

  const [firstRow, setFirstRow] = useState([]);
  const [secondRow, setSecondRow] = useState([]);
  const [thirdRow, setThirdRow] = useState([]);
  const [shifted, setShifted] = useState(false);
  const [local, setLocal] = useState(true);
  const [wireless, setWireless] = useState(true);
  const [customer, setCustomer] = useState("");
  const [network, setNetwork] = useState(null);
  const [nickname, setNickname] = useState(null);

  useEffect(() => {
    setFirstRow(keyboardLetters[0].firstRowLetters);
    setSecondRow(keyboardLetters[0].secondRowLetters);
    setThirdRow(keyboardLetters[0].thirdRowLetters);
  }, []);

  const getNetwork = (e) => {
    setNetwork(e.target.innerText);
    console.log(network);
  };

  const getCustomer = (e) => {
    setCustomer(e.target.value);
  };

  console.log("network", network);
  console.log("customer", customer);

  return (
    <div className="p95Main">
      <Link to="/" className="p95Main__back">
        Back To Welcome Screen
      </Link>
      <div className="p95Main__bg">
        <img src={bg} alt="" />
      </div>
      <h1 className="p95Warning">
        Added mostly everything for ProCure, will make last adjustments soon,
        like cure screen. Changed printer to match 6.35, added most of the
        menues. If anything breaks, just go back to the main page and/or
        refresh.
      </h1>
      <div className="p95Main__logo">
        <img src={logo} alt="" />
      </div>
      <Link to="/p95/print-from-usb" className="p95Main__usb">
        <img src={usb} alt="" />
      </Link>
      <Link to="/p95/print-from-rayware" className="p95Main__send">
        <h3>
          Send Print
          <br />
          From RayWare
        </h3>
      </Link>
      <div className="p95Main__container">
        <div className="p95Main__screen">
          <Switch key={location.pathname} location={location}>
            <Route exact path={`/p95/settings`}>
              <div className="p95Main__buttons">
                <Link to="/p95" className="p95Main__print">
                  <p>Print</p>
                </Link>
                <div className="p95Main__print">
                  <p>History</p>
                </div>
                <div className="p95Main__print">
                  <p>Settings</p>
                </div>
              </div>
              <div className="p95Main__settings">
                <div className="p95Main__connectivity">
                  {customer !== "" && (
                    <div className="p95Main__update">
                      <div className="p95Main__updateContent">
                        <div className="p95Main__updateLeft">
                          <GetApp />
                          <h3>Software Update</h3>
                        </div>
                        <div className="p95Main__updateRight">
                          <h5>Check for Updates</h5>
                        </div>
                      </div>

                      <hr />
                    </div>
                  )}
                  <div className="p95Main__connectivityTitle">
                    <Wifi />
                    <h3>Connectivity</h3>
                  </div>
                  <div className="p95Main__connectivityOptions">
                    <div
                      className="p95Main__setting connection"
                      style={{ padding: !local && "20px 0 0" }}
                    >
                      <div className="p95Main__connection">
                        <h4>Connection</h4>
                        <div className="p95Main__settingOption">
                          <h5
                            onClick={() => setLocal(true)}
                            className={local && `${"selectedOption"}`}
                          >
                            Local Network
                          </h5>
                          <h5
                            onClick={() => setLocal(false)}
                            className={!local && `${"selectedOption"}`}
                          >
                            Printer Hotspot
                          </h5>
                        </div>
                      </div>

                      {!local && (
                        <div className="p95Main__hotspotDetails">
                          <p>
                            Hotspot allows for direct connection to the printer
                            through Wi-Fi without an intermediary wireless
                            router. Enable this feature if you do not have a
                            local Wi-Fi connection or if you are having problems
                            connection to your printer through your Wi-Fi
                            network. While Hotspot is turned on, your printer
                            will not be able to connect to a Wi-Fi network.
                          </p>
                          <div className="p95Main__hotspotInfo">
                            <div className="p95Main__hotspotName">
                              <WifiTethering />
                              <p className="hotspotName">Hotspot Name</p>
                              <p className="hotspotSN">P95-12A3B45C</p>
                            </div>
                            <div className="p95Main__hotspotPassword">
                              <VpnKey />
                              <p className="hotspotPassword">
                                Hotspot Password
                              </p>
                              <p className="hotspotPW">sprintray</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="p95Main__setting">
                      <h4>Connection Profile</h4>
                      <div className="p95Main__settingOption">
                        <h5
                          onClick={() => setWireless(true)}
                          className={wireless && `${"selectedOption"}`}
                        >
                          Wireless
                        </h5>
                        <h5
                          onClick={() => setWireless(false)}
                          className={!wireless && `${"selectedOption"}`}
                        >
                          Wired
                        </h5>
                      </div>
                    </div>
                    <Link to="/p95/wifi-networks" className="p95Main__setting">
                      <h4>Network</h4>
                      {wireless ? (
                        <div
                          to="/p95/wifi-networks"
                          className="p95Main__settingOption"
                        >
                          {network === null ? (
                            <h4>No WiFi Selected</h4>
                          ) : (
                            <Link to="/p95/wifi-status">{network}</Link>
                          )}

                          <ChevronRight />
                        </div>
                      ) : (
                        <Link
                          to="/p95/ethernet"
                          className="p95Main__settingOption"
                        >
                          <h4>Ethernet</h4>

                          <ChevronRight />
                        </Link>
                      )}
                    </Link>
                    <Link to="/p95/login" className="p95Main__setting last">
                      <h4>SprintRay Dashboard Login</h4>
                      <div className="p95Main__settingOption">
                        <h4>{customer}</h4>
                        <ChevronRight />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="p95Main__general">
                <div className="p95Main__generalTitle">
                  <Settings />
                  <h3>General</h3>
                </div>
                <Link to="/p95/about" className="p95Main__setting">
                  <h4>About</h4>
                  <div className="p95Main__settingOption">
                    <ChevronRight />
                  </div>
                </Link>
                <Link to="/p95/language" className="p95Main__setting">
                  <h4>System Language</h4>
                  <div className="p95Main__settingOption language">
                    <p>English</p>
                    <ChevronRight />
                  </div>
                </Link>
                <Link to="/p95/lid" className="p95Main__setting extra">
                  <h4>Lid Safety Sensor</h4>
                  <div className="p95Main__settingOption language">
                    <p>On</p>
                    <ChevronRight />
                  </div>
                </Link>
                <Link to="/p95/tankheating" className="p95Main__setting extra">
                  <h4>Tank Heating Always On</h4>
                  <div className="p95Main__settingOption language">
                    <p>On</p>
                    <ChevronRight />
                  </div>
                </Link>
                <Link
                  to="/p95/reinforcedsupports"
                  className="p95Main__setting extra"
                >
                  <h4>Reinforced Supports (Beta)</h4>
                  <div className="p95Main__settingOption language">
                    <p>Off</p>
                    <ChevronRight />
                  </div>
                </Link>
                <Link to="/p95/grayscale" className="p95Main__setting extra">
                  <h4>Grayscale (Beta)</h4>
                  <div className="p95Main__settingOption language">
                    <p>Off</p>
                    <ChevronRight />
                  </div>
                </Link>
                <Link to="/p95" className="p95Main__setting extra">
                  <h4>Reboot Printer</h4>
                  <div className="p95Main__settingOption language">
                    <ChevronRight />
                  </div>
                </Link>
              </div>
            </Route>

            <Route exact path={`/p95/print-from-rayware`}>
              <PrintFromRayware />
            </Route>

            <Route exact path={`/p95/print-from-usb`}>
              <PrintFromUSB />
            </Route>

            <Route exact path={`/p95/usb-select`}>
              <UsbSelect />
            </Route>

            <Route exact path={`/p95/usb-directions`}>
              <UsbDirections />
            </Route>

            <Route exact path={`/p95/usb-final`}>
              <UsbFinal />
            </Route>

            <Route exact path={`/p95/wifi-networks/password`}>
              <div className="p95Wifi__container">
                <div className="p95Wifi__header">
                  <Link to="/p95/wifi-networks" className="p95Wifi__back">
                    <ChevronLeft />
                    <p>Back</p>
                  </Link>
                  <h2>{network}</h2>
                </div>
                <div className="p95Wifi__details">
                  <div className="p95Wifi__input">
                    <form>
                      <input type="password" placeholder="Password" />
                    </form>
                  </div>
                  <div className="p95Wifi__keyboard">
                    <div className="p95Wifi__firstRow">
                      {firstRow.map((letter) => (
                        <p className={`letter ${shifted && "capitalized"}`}>
                          {letter}
                        </p>
                      ))}
                    </div>
                    <div className="p95Wifi__secondRow">
                      {secondRow.map((letter) => (
                        <p className={`letter ${shifted && "capitalized"}`}>
                          {letter}
                        </p>
                      ))}
                    </div>
                    <div className="p95Wifi__thirdRow">
                      <p
                        className={`letter ${shifted && "capitalized"}`}
                        style={{ padding: "17px 36px" }}
                        onClick={() => setShifted(!shifted)}
                      >
                        shift
                      </p>
                      {thirdRow.map((letter) => (
                        <p className={`letter ${shifted && "capitalized"}`}>
                          {letter}
                        </p>
                      ))}
                      <p
                        className={`letter ${shifted && "capitalized"}`}
                        style={{ padding: "17px 36px" }}
                      >
                        back
                      </p>
                    </div>
                    <div className="p95Wifi__fourthRow">
                      <p className="numbers">123</p>
                      <p className="spacebar"></p>
                      <p className="at">@</p>
                      <Link
                        to="/p95/settings"
                        className={`wifiEnter ${shifted && "capitalized"}`}
                      >
                        enter
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Route>

            <Route exact path={`/p95/ethernet`}>
              <Ethernet />
            </Route>

            <Route exact path={`/p95/about`}>
              <About network={network} />
            </Route>

            <Route exact path={`/p95/language`}>
              <Language />
            </Route>

            <Route exact path={`/p95/lid`}>
              <Lid />
            </Route>

            <Route exact path={`/p95/tankheating`}>
              <TankHeating />
            </Route>

            <Route exact path={`/p95/reinforcedsupports`}>
              <ReinforcedSupports />
            </Route>

            <Route exact path={`/p95/grayscale`}>
              <Grayscale />
            </Route>

            <Route exact path={`/p95/wifi-status`}>
              <div className="p95WifiStatus__container">
                <div className="p95WifiStatus__header">
                  <Link to="/p95/settings" className="p95WifiStatus__back">
                    <ChevronLeft />
                    <p>Back</p>
                  </Link>
                  <h2>{network}</h2>
                </div>
                <div className="p95WifiStatus__details">
                  <WifiStatus
                    network={network}
                    onClick={() => setNetwork(null)}
                  />
                </div>
              </div>
            </Route>

            <Route exact path={`/p95/wifi-networks`}>
              <div className="p95Wifi__container">
                <div className="p95Wifi__header">
                  <Link to="/p95/settings" className="p95Wifi__back">
                    <ChevronLeft />
                    <p>Back</p>
                  </Link>
                  <h2>Select Wireless Network</h2>
                </div>
                <div className="p95Wifi__details">
                  <div className="p95Wifi__networks">
                    <Link
                      to="/p95/wifi-networks/password"
                      className="p95Wifi__network network1"
                    >
                      <h3 onClick={(e) => getNetwork(e)}>ALL_SMILES_PRIVATE</h3>
                      <SignalWifi4Bar />
                    </Link>
                    <Link
                      to="/p95/wifi-networks/password"
                      className="p95Wifi__network network2"
                    >
                      <h3 onClick={(e) => getNetwork(e)}>ALL_SMILES_GUEST</h3>
                      <SignalWifi4Bar />
                    </Link>
                    <Link
                      to="/p95/wifi-networks/password"
                      className="p95Wifi__network network3"
                    >
                      <h3 onClick={(e) => getNetwork(e)}>
                        Drop It Like It's Hotspot
                      </h3>
                      <SignalWifi3Bar />
                    </Link>
                    <Link
                      to="/p95/wifi-networks/password"
                      className="p95Wifi__network network4"
                    >
                      <h3 onClick={(e) => getNetwork(e)}>
                        That's What She SSID
                      </h3>
                      <SignalWifi2Bar />
                    </Link>
                    <Link
                      to="/p95/wifi-networks/password"
                      className="p95Wifi__network network5"
                    >
                      <h3 onClick={(e) => getNetwork(e)}>
                        A LANister Never Forgets
                      </h3>
                      <SignalWifi1Bar />
                    </Link>

                    <Link
                      to="/p95/wifi-networks/password"
                      className="p95Wifi__network network7"
                    >
                      <h3 onClick={(e) => getNetwork(e)}>It Burns When IP</h3>
                      <SignalWifi1Bar />
                    </Link>
                    <Link
                      to="/p95/wifi-networks/password"
                      className="p95Wifi__network network8"
                    >
                      <h3 onClick={(e) => getNetwork(e)}>
                        Go Go Router Rangers
                      </h3>
                      <SignalWifi0Bar />
                    </Link>
                    <Link
                      to="/p95/wifi-networks/password"
                      className="p95Wifi__network network9"
                    >
                      <h3 onClick={(e) => getNetwork(e)}>
                        New England Clam Router
                      </h3>
                      <SignalWifi0Bar />
                    </Link>
                    <Link
                      to="/p95/wifi-networks/password"
                      className="p95Wifi__network network10"
                    >
                      <h3 onClick={(e) => getNetwork(e)}>
                        I Now Pronounce You Man and Wifi
                      </h3>
                      <SignalWifi0Bar />
                    </Link>
                  </div>
                </div>
              </div>
            </Route>

            <Route exact path={`/p95/login`}>
              <div className="p95Login__container">
                <div className="p95Login__header">
                  <Link to="/p95" className="p95Login__back">
                    <ChevronLeft />
                    <p>Back</p>
                  </Link>
                  <h2>SprintRay Dashboard Login</h2>
                </div>
                <div className="p95Login__details">
                  <div className="p95Login__input">
                    <form>
                      <input
                        value={customer}
                        onChange={(e) => getCustomer(e)}
                        type="email"
                        placeholder="Username"
                      />
                      <input type="password" placeholder="Password" />
                    </form>
                  </div>
                  <div className="p95Login__keyboard">
                    <div className="p95Login__firstRow">
                      {firstRow.map((letter) => (
                        <p className={`letter ${shifted && "capitalized"}`}>
                          {letter}
                        </p>
                      ))}
                    </div>
                    <div className="p95Login__secondRow">
                      {secondRow.map((letter) => (
                        <p className={`letter ${shifted && "capitalized"}`}>
                          {letter}
                        </p>
                      ))}
                    </div>
                    <div className="p95Login__thirdRow">
                      <p
                        className={`letter ${shifted && "capitalized"}`}
                        style={{ padding: "17px 36px" }}
                        onClick={() => setShifted(!shifted)}
                      >
                        shift
                      </p>
                      {thirdRow.map((letter) => (
                        <p className={`letter ${shifted && "capitalized"}`}>
                          {letter}
                        </p>
                      ))}
                      <p
                        className={`letter ${shifted && "capitalized"}`}
                        style={{ padding: "17px 36px" }}
                      >
                        back
                      </p>
                    </div>
                    <div className="p95Login__fourthRow">
                      <p className="numbers">123</p>
                      <p className="spacebar"></p>
                      <p className="at">@</p>
                      <Link to="/p95/settings">
                        <p className={`enter ${shifted && "capitalized"}`}>
                          enter
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Route>

            <Route exact path={`/p95`}>
              <div className="p95Main__buttons">
                <div className="p95Main__print">
                  <p>Print</p>
                </div>
                <div className="p95Main__print">
                  <p>History</p>
                </div>
                <Link to="/p95/settings" className="p95Main__print">
                  <p>Settings</p>
                </Link>
              </div>
              <div className="p95Main__details">
                <div className="p95Main__detailsTop">
                  <h2>Ready to Print</h2>
                  <p>
                    Upload print job from desktop or insert a USB drive to start
                  </p>
                </div>
                <div className="p95Main__detailsCenter">
                  {nickname ? <h3>{nickname}</h3> : <h3>Printer Nickname</h3>}

                  <p>P95-12A3B45C</p>
                </div>
                <div className="p95Main__detailsBottom">
                  <div className="p95Main__detailsWifi">
                    <Wifi />
                    {network === null ? (
                      <Link to="/p95/wifi-networks">Connect to WiFi</Link>
                    ) : (
                      <Link to="/p95/wifi-status">
                        <h4>{network}</h4>
                      </Link>
                    )}
                  </div>
                  {customer === "" ? (
                    <Link to="/p95/login" className="p95Main__detailsDash">
                      <h4>Connect to Dashboard</h4>
                      <ChevronRight />
                    </Link>
                  ) : (
                    <Link to="/p95" className="p95Main__detailsDash">
                      <AccountBox />
                      <h4>{customer}</h4>
                    </Link>
                  )}
                </div>
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default P95Main;
