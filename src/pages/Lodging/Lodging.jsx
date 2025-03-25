import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import jsonData from '../../housing.json';
import Slideshow from '../../components/Slideshow/Slideshow';
import redstar from '../../assets/redstar.png'
import greystar from '../../assets/greystar.png';
import Description from '../../components/Description/Description';
import Collapse from '../../components/Collapse/Collapse';
import "./Lodging.css";

function LodgingDetails() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [lodgingData, setLodgingData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const foundLodging = jsonData.find((item) => item.id === id)

                if (!foundLodging) {
                    navigate('/error')
                } else {
                    setLodgingData(foundLodging)
                }
            } catch (error) {
                console.error('Erreur lors du chargement des données', error)
                navigate('/error')
            }
        }

        fetchData()
    }, [id, navigate]);

  
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            const starImage = i <= lodgingData.rating ? redstar : greystar;
            stars.push(
                <img
                    key={i}
                    src={starImage}
                    alt="Lodging rating star"
                    title="Number of stars for accommodation"
                />
            );
        }
        return stars;
    };

    if (!lodgingData) return <h2>Chargement...</h2>

    return (
        <main>
            {lodgingData && (
                <div>
                    <section>
                        <Slideshow pictures={lodgingData.pictures} title={lodgingData.title} />
                    </section>
                    <section className='contain-lodging'>
                        <Description
                            title={lodgingData.title}
                            location={lodgingData.location}
                            tags={lodgingData.tags}
                            host={
                                <h2>
                                    {lodgingData.host.name.split(' ')[0]}<br />
                                    {lodgingData.host.name.split(' ')[1]}
                                </h2>
                            }
                            picture={lodgingData.host.picture}
                            rating={renderStars()}
                        />
                        <div className='collapse-lodging-page'>
                            <div className='collapse-in-lodging'>
                                <Collapse title="Description">
                                    <p>{lodgingData.description}</p>
                                </Collapse>
                            </div>
                            <div className='collapse-in-lodging'>
                                <Collapse title="Équipements">
                                    {lodgingData.equipments.map((equipment, index) => (
                                        <div className='details-equipments' key={index}>{equipment}</div>
                                    ))}
                                </Collapse>
                            </div>
                        </div>
                    </section>
                </div>
            )}
        </main>
    );
}




export default LodgingDetails