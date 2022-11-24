import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonModal,
  IonPage,
  IonRow,
  IonSearchbar,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Tab1.css";
import data from "../data.json";
import arow from "../assets/img/arow.svg";
import arowleft from "../assets/img/arowleft.svg";
import coppy from "../assets/img/coppy.svg";
import clipboard from "../assets/img/clipboard.svg";

import { useRef } from "react";

const Tab2: React.FC = () => {
  const initTodoList = data;
  const Litems = initTodoList.slice(0, 24).map((item, index) => (
    <IonGrid ion-no-padding>
      <IonRow>
        <IonCol size="4" size-sm="6" size-md="3" size-lg="3" size-xl="3">
          <IonItem>
            <IonLabel key={index}>{item}</IonLabel>
          </IonItem>
        </IonCol>
      </IonRow>
    </IonGrid>
  ));
  const items = Litems.slice(0, 18).map((Litems) => <li>{Litems}</li>);
  console.log("2", items);

  const detailItems = items.slice(1, 7).map((items) => <li>{items}</li>);
  console.log("3", detailItems);

  const modal = useRef<HTMLIonModalElement>(null);

  return (
    <IonPage>
      <IonHeader className="headerList">
        <IonToolbar>
          <IonButtons
            collapse={true}
            slot="start"
            color="light"
            className="PageHeader__Left"
          >
            <IonImg src={arow} className="iconleft" />
          </IonButtons>
          <IonTitle className="textCreate">Create New Wallet</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonTitle className="textLink">Auto Gen Seed Phrase?</IonTitle>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2sda</IonTitle>
          </IonToolbar>
        </IonHeader>
        {items}
        <div className="coppyBox">
          <div className="contenCoppy">
            <IonText className="textCoppy">
              Tap to Copy or Carefully write down your seed phrase and store it
              in a safe place
            </IonText>
          </div>
          <div className="iconCoppy">
            <IonImg  id="open-modal" src={coppy} className="iconCoppy" />
          </div>
        </div>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <div className="textFooter">
            <IonTitle className="textCreate">How does this work?</IonTitle>
            <IonButtons
              slot="primary"
              color="light"
              className="PageHeader__Left"
            >
              <IonImg src={arowleft} className="iconleft" />
            </IonButtons>
          </div>

          <IonButtons className="buttonFooter">
            <IonTitle className="textButton">NEXT</IonTitle>
          </IonButtons>
        </IonToolbar>
      </IonFooter>

      <IonModal
        ref={modal}
        trigger="open-modal"
        initialBreakpoint={0.25}
        breakpoints={[0, 0.25, 0.5, 0.75]}
      >
        <IonContent className="ion-padding">
          <div className="boxModal">
          <div className="iconModal">
          <IonImg src={clipboard}  />
          </div>
          <div>
          <IonTitle className="textModal">Saved to clipboard</IonTitle>
          </div>
          </div>

        
        </IonContent>
      </IonModal>
    </IonPage>
  );
};

export default Tab2;
