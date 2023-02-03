import '../styles/Contact.css';
import Map from '../components/Map';

export default function Contact() {

    return (
        <div className="contact">
            <h1>Contact</h1>
            <div className="cover">
                
                <form action="" method="POST">
                    <div className='firstRow'>
                        <div>
                            <label htmlFor="nom"></label>
                            <input type="text" placeholder="Nom" />
                        </div>
                        <div>
                            <label htmlFor="mail"></label>
                            <input type="email" placeholder="Email" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="sujet"></label>
                        <select name="sujet" id="sujet">
                            <option value="">--Sélectionner le sujet de votre message--</option>
                            <option value="menu">Questions à propos des menus ?</option>
                            <option value="horaire">Questions à propos des horaires ?</option>
                            <option value="suggestion">Suggestion pour continuer de s'améliorer</option>
                            <option value="objets">Objets perdus</option>
                            <option value="reservation">Réservation</option>
                            <option value="autre">Autre</option>
                        </select>
                    </div>
                    <div>
                        <textarea name="contenu" id="contenu" cols="81" rows="10" ></textarea>
                    </div>
                    <div>
                        <input type="submit" className='submit'/>
                    </div>
                </form>
                <Map/>
                
            </div>
            <p>Adresse : 297 chaussée Fernand Forest - 59200 Tourcoing, FRANCE</p>
            <p>Tel : (+33)320238465</p>
        </div>
    );
}