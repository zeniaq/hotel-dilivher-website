import styles from "../../styles/Home.module.css";

const SectionContact = () => {
    const classMail = `${styles.icon} ${styles.solid} ${styles.alt} ${styles.home}`;
    const classPhone = `${styles.icon} ${styles.solid} ${styles.alt} ${styles.phone}`;
    const classUbication = `${styles.icon} ${styles.solid} ${styles.alt} ${styles.home}`;
    const classInput = `${styles.field} ${styles.half}`;
    return (
        <section className={styles.contact}>
            <div className={styles.inner}>
                <section>
                    <form method="post" action="#">
                        <div className={styles.fields}>
                            <div className={classInput}>
                                <label htmlFor="name">
                                    Name
                                    <input type="text" name="name" id="name" />
                                </label>
                            </div>
                            <div className={classInput}>
                                <label htmlFor="email">
                                    Email
                                    <input type="text" name="email" id="email" />
                                </label>
                            </div>
                            <div className={styles.field}>
                                <label htmlFor="message">
                                    Message
                                    <textarea name="message" id="message" rows="6" />
                                </label>
                            </div>
                        </div>
                        <ul className={styles.actions}>
                            <li>
                                <input
                                    type="submit"
                                    value="Send Message"
                                    className={styles.primary}
                                />
                            </li>
                            <li>
                                <input type="reset" value="Clear" />
                            </li>
                        </ul>
                    </form>
                </section>
                <section className={styles.split}>
                    <section>
                        <div className={styles.contactMethod}>
                            <span className={classMail}  >
                                <i className="fas fa-envelope" />
                            </span>
                            <h3>Email</h3>
                            <a href="mailto:contacto@hoteldilivher.com">
                                contacto@hoteldilivher.com
                            </a>
                        </div>
                    </section>
                    <section>
                        <div className={styles.contactMethod}>
                            <span className={classPhone}  >
                                <i className="fas fa-phone-alt" />
                            </span>
                            <h3>Teléfono</h3>
                            <span>(+52) 776.761.3602</span>
                        </div>
                    </section>
                    <section>
                        <div className={styles.contactMethod}>
                            <span className={classUbication} >
                                <i className="fas fa-home" />
                            </span>
                            <h3>Ubicación</h3>
                            <span>
                                Calle 20 de Noviembre No.7
                                <br />
                                San Pedro Tlachichilco C.P.43730 Acaxochitlán, Hgo.
                            </span>
                        </div>
                    </section>
                </section>
            </div>
        </section>
    );
};
export default SectionContact;
