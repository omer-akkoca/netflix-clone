import React, { createContext, useContext, useState } from 'react'
import { 
    Container, 
    Group, 
    Title, 
    SubTitle, 
    Text, 
    Feature, 
    FeatureTitle, 
    FeatureText, 
    FeatureClose, 
    Maturity,
    Content,
    Meta,
    Entities,
    Item,
    Image
} from "./styles/card"

const FeatureContext = createContext()

export default function Card({children, ...rest}) {
    const [showFeature, setShowFeature] = useState(false)
    const [itemFeature, setItemFeature] = useState({})

    return (
        <FeatureContext.Provider value={{showFeature,setShowFeature,itemFeature,setItemFeature}}>
            <Container {...rest}>{children}</Container>
        </FeatureContext.Provider>
    );
}

Card.Group = function CardGroup({children, ...rest}) {
    return <Group {...rest}>{children}</Group>
}

Card.Title = function CardTitle({children, ...rest}) {
    return <Title {...rest}>{children}</Title>
}

Card.SubTitle = function CardSubTitle({children, ...rest}) {
    return <SubTitle {...rest}>{children}</SubTitle>
}

Card.Meta = function CardMeta({children, ...rest}) {
    return <Meta {...rest}>{children}</Meta>
}

Card.Item = function CardItem({item, children, ...rest}) {
    const { setShowFeature, setItemFeature } = useContext(FeatureContext)
    return (
        <Item 
            {...rest}
            onClick={()=>{
                setItemFeature(item)
                setShowFeature(true)
            }}
        >
            {children}
        </Item>
    )
}

Card.Image = function CardMeta({...rest}) {
    return <Image {...rest}/>
}

Card.Entities = function CardEntities({children, ...rest}) {
    return <Entities {...rest}>{children}</Entities>
}

Card.Text = function CardText({children, ...rest}) {
    return <Text {...rest}>{children}</Text>
}

Card.Feature = function CardFeature({category, children, ...rest}) {
    const { showFeature, itemFeature, setShowFeature } = useContext(FeatureContext)

    return showFeature ? (
        <Feature {...rest} src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}>
          <Content>
            <FeatureTitle>{itemFeature.title}</FeatureTitle>
            <FeatureText>{itemFeature.description}</FeatureText>
            <FeatureClose onClick={() => setShowFeature(false)}>
              <img src="/images/icons/close.png" alt="Close" />
            </FeatureClose>
    
            <Group margin="30px 0" flexDirection="row" alignItems="center">
              <Maturity rating={itemFeature.maturity}>{itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}</Maturity>
              <FeatureText fontWeight="bold">
                {itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}
              </FeatureText>
            </Group>
    
            {children}
          </Content>
        </Feature>
      ) : null;
}
