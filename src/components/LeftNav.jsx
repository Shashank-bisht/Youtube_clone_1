import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LeftNavMenuItem from "./LeftNavMenuItem";
import { categories } from "../utils/constants";
import { Context } from "../context/contextApi";

const LeftNav = () => {
    
    const { selectCategories, setSelectCategories, mobileMenu } =
        useContext(Context);

    const navigate = useNavigate();

    const clickHandler = (name, type) => {
        switch (type) {
            case "category":
                return setSelectCategories(name);
            case "home":
                return setSelectCategories(name);
            case "menu":
                return false;
            default:
                break;
        }
    };
    console.log("mobileMenu:", mobileMenu); 
    return (
        <div
            className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-50  md:translate-x-0 transition-all ${
                !mobileMenu ? "translate-x-[-240px]" : "translate-x-0"
            }`}
        >
            <div className="flex px-5 flex-col">
                {/* mapping the categories */}
                {categories.map((item) => {
                    return (
                        <React.Fragment key={item.name}>
                            <LeftNavMenuItem
                                text={item.type === "home" ? "Home" : item.name}
                                icon={item.icon}
                                // action is a prop and passing the function in the prop
                                action={() => {
                                    clickHandler(item.name, item.type);
                                    navigate("/");
                                }}
                                // for hovering effect on left nav
                                className={`${
                                    selectCategories === item.name
                                        ? "bg-white/[0.15]"
                                        : ""
                                }`}
                            />
                            {item.divider && (
                                <hr className="my-5 border-white/[0.2]" />
                            )}
                        </React.Fragment>
                    );
                })}
                <hr className="my-5 border-white/[0.2]" />
                {/* <div className="text-white/[0.5] text-[12px]">
                    Clone by: JS Dev Hindi
                </div> */}
            </div>
        </div>
    );
};

export default LeftNav;