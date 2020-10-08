import PropTypes from "prop-types";

const MenuNav = ({
    classButton,
    classPrimary,
    classFit,
    classLinks,
    classActions,
    classStacked,
}) => {
    const classRegister = `${classButton} ${classPrimary} ${classFit}`;
    const classSession = `${classButton} ${classFit}`;
    const classForm = `${classActions} ${classStacked}`;
    return (
        <nav id="menu">
            <ul className={classLinks}>
                <li>
                    <a href="index.html">Inicio</a>
                </li>
                <li>
                    <a href="landing.html">Habitaciones</a>
                </li>
                <li>
                    <a href="generic.html">Contacto</a>
                </li>
                <li>
                    <a href="elements.html">Elements</a>
                </li>
            </ul>
            <ul className={classForm}>
                <li>
                    <a href="#f" className={classRegister}>
                        Registrarse
                    </a>
                </li>
                <li>
                    <a href="#d" className={classSession}>
                        Iniciar Sesión
                    </a>
                </li>
            </ul>
        </nav>
    );
};

MenuNav.propTypes = {
    classButton: PropTypes.string,
    classPrimary: PropTypes.string,
    classFit: PropTypes.string,
    classLinks: PropTypes.string,
    classActions: PropTypes.string,
    classStacked: PropTypes.string,
};

MenuNav.defaultProps = {
    classButton: "",
    classPrimary: "",
    classFit: "",
    classLinks: "",
    classActions: "",
    classStacked: "",
};

export default MenuNav;
