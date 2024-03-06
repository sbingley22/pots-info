import MainNavbar from "./MainNavbar"
import img1 from "../assets/dysfunctionalGlycocalyx.jpg"
import { Container } from 'react-bootstrap';

const Glycocaylx = () => {
  return (
    <Container fluid>
      <MainNavbar />
      <h1 style={{textAlign: "left"}}>Glycocaylx</h1>
      <br />
      <h3>Overview</h3>
      <p>The glycocaylx is a sugary coat that lines the surface of blood vessels. It has several important functions:</p>
      <ul>
        <li>
          <p><strong>Protects the endothelium: </strong> The endothelial cells are delicate and need to be protected from shear stress from blood flow, blood borne particles, and immune cells.</p>
        </li>
        <li>
          <p><strong>Regulates permeability: </strong>It acts like a selective filter, allowing essentail nutrients and small molecules through whilst restricting passage of larger molecules and harmful substances</p>
        </li>
        <li>
          <p><strong>Lubrication: </strong>It provides a negative charge which repels the red blood cells negative charge allowing them to flow through the blood vessels smoothly</p>
        </li>
        <li>
          <p><strong>Cell adhesion and signaling: </strong>Its sugar chains allow adhesion of specific blood cells that can provide signaling cascades that relay messages from the outside to the interior of the cell. These signals can promote growth and survival of endothelial cells, influence migration of blood cells, play a role in inflammatory responses, etc.</p>
        </li>
      </ul>
      <br />

      <h3>Composition</h3>
      <ul>
        <li><strong>Proteoglycans: </strong> These consist of a protein core linked to long chains of glycosaminoglycans (GAGs). Which are highly negatively charged sugar molecules. The most abundant is Heparan Sulfate Proteoglycan (HSPG) responsible for adhesion, signaling, and regulation. Hyaluronic acid is unattached in the glycocaylx yet it contributes to hydration, lubrication, structure, and cell signaling.</li>
        <li><strong>Glycoproteins: </strong> Proteins with sugar chains attached. Examples are thrombomodulin which inhibits the formation of blood clots. Selexins which play a role in leukocyte adhesion and migration during inflammation as does ICAM-1 (Intercellular Adhesion Molecule 1) and VCAM-1 (Vascular Cell Adhesion Molecule 1).</li>
        <li><strong>Glycolipids: </strong> Fat molecules with sugar chains attached. These are the least abundant. Gangliosides are one such molecules that are involved in cell-cell recognition, signaling, and regulation.</li>
      </ul>
      <img src={img1} alt="Dysfunctional Glycocalyx" className="img-fluid" style={{marginBottom: "40px"}} />
      
      <h3>What damages the Glycocaylx?</h3>
      <p>Inflammation, infection, high blood sugar and high bp all damage the glycocaylx. It can be via release of enzymes that degrade the components of the glycocalyx, ROS, or mechanical stress. Some of the main players are:</p>
      <ul>
        <li><strong>Cytokines: </strong> Released by immune cells they trigger the production of inflammatory molecules and enzymes such as TNF-a and IL-1B which go on to produce ROS, MMPs, Heparanase, hyaluronidase.</li>
        <li><strong>ROS: </strong> ROS is highly reactive and directly damages the structures of the glycocalyx.</li>
        <li><strong>MMPs: </strong> Break down glycosaminoglycans and Proteoglycans.</li>
        <li><strong>Heparanase and Hyaluronidase: </strong> These enzymes cleave glycosaminoglycans.</li>
        <li><strong>Neutrophils: </strong> Release ROS and proteases that damage the glycocalyx</li>
        <li><strong>Viruses: </strong> Viruses like COVID-19 directly bind to and damage the glycocalyx through interactions with specific glycocalyx components like heparan sulfate.</li>
        <li><strong>Bacteria: </strong> Bacterial toxins released from Staphyloccus aureus for example directly degrade glycocalyx components.</li>
      </ul>
      <br />

      <h3>Consequences of Glycocalyx Damage</h3>
      <h5>Increased vascular permeability:</h5>
      <p className="text-left">Fluids, proteins, and blood cells leak into the surrounding tissue causing edema and hypovolemia.</p>
      <h5>Disrupted blood flox:</h5>
      <p className="text-left">Blood cells adhere to the exposed endothelial cells which can cause blood clots. Also it disrupts blood flow in the microvasculature limiting blood flow through the capilaries and preventing oxygen and nutrients from reaching tissues.</p>
      <h5>Enhanced inflammation:</h5>
      <p className="text-left">Immune cells activate and stick to the blood vessel walls releasing inflammatory mediators creating a vicious cycle perpetuating damage to the glycocalyx and surrounding tissues.</p>
      <h5>Increased susceptibility to infections:</h5>
      <p className="text-left">The glycocalyx is no longer able to repel pathogens.</p>
      <br />

      <h3>Supplements</h3>
      <div className="child-text-left">
        <h5>Hyaluronic Acid</h5>
        <p>Supplementing old mice for 10 weeks with dietary EG constituents (High Molecular Wieght hyaluronic acid, glucosamine sulfate and fucoidan, an antioxidant enzyme, superoxide dismutase) restored EG levels comparable to young mice.</p>
        <p>Dosage: 200mg?</p>
        <h5>Glucosamine Sulfate</h5>
        <p>Studies have shown glucosamine can be incorporated into the structure of the glycocalyx specifically contributing to the formation of heparan sulfate and hyaluronan.</p>
        <p>Dosage: 1.5g?</p>
        <h5>Fucoidan (fu-coy-dan)</h5>
        <p>Fucoidan restores glycocalyx degradation, barrier disruption, inflammation and increased coagulation on endothelial surfaces in cultured COVID-19 patients microvascular cells.</p>
        <p>Chronic Kidney Disease causes damage to the endothelial glycocalyx. A supplement containing glycocalyx components and fucoidan was fed to mice which resulted in both protection and rebuilding of the eGC in the context of enzymatic and CKD-induced eGC damge. The experiment suggested PI3K, ERK-MAPK and vesicular transport via the Golgi system, as well as the inhibition of heparanase are involved in the protective effect and that fucoidan may be an essentail component which protects the eGC in acute settings.</p>
        <p>Dosage: 1g?</p>
        <h5>Pycnogenol (pic-noj-enol)</h5>
        <ul>
          <li>Increases Hyaluronic Acid Synthase-1 and Collagen Type I</li>
          <li>Activates GLUT1 lowering fasting glucose.</li>
          <li>Similar to Metformin, imporves blood glucose, vascular reactivity, left ventricular hypertrophy, AMPK, GLUT4.</li>
          <li>Crosses the blood brain barrier and protects against hypoxia (via LDH leakage, oxidative stress, cytokines) and LPS induced neuroinflammation of microglia.</li>
          <li>Protects the vasculature by preventing thrombosis, activates eNOS and reduces overall vascular oxidative stress.</li>
          <li>Inhibits MMP9 expressions</li>
          <li>Improves Kidney Function by reducing blood pressure, reducing inflammation, and increasing blood flow. Protects the kidneys against high-glucose induced death.</li>
          <li>Dosage: 50-300mg/day</li>
        </ul>
        <h5>Berberine</h5>
        <p>ROS and MMP inhibition.</p>
        <h5>Hydrocortisone</h5>
        <p>Pervents mast cell degranulation and MMP release.</p>
      </div>
    </Container>
  )
}

export default Glycocaylx
