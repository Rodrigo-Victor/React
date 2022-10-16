import React from "react"
import Planet from "./planet"

export default function planets() {
return (
  <React.Fragment>
    <h3>Planet List</h3>
    <hr/>
    <Planet name="Mercúrio"
            text="Mercúrio é o menor[nota 1][nota 2] e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar. Mercúrio completa três rotações em torno de seu eixo a cada duas órbitas."
            img_url="https://www.coladaweb.com/wp-content/uploads/2015/11/20151113-mercurio.png" 
            DescriptionLink="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
    />
    <hr/>
    <Planet name="Plutão"
            text="Plutão, formalmente designado 134340 Plutão (símbolos: ⯓ e ♇) é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol. Originalmente classificado como um planeta, Plutão é atualmente o maior membro conhecido do cinturão de Kuiper,[11] uma região de corpos além da órbita de Netuno."
            img_url="https://www.coladaweb.com/wp-content/uploads/2015/11/20151113-mercurio.png" 
            DescriptionLink="https://pt.wikipedia.org/wiki/Plut%C3%A3o"
    />
    <hr/>
  </React.Fragment>
)
}