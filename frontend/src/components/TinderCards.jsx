import React, { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import axios from '../axios';

function TinderCards() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/tinder/cards');
            setPeople(req.data);
        }
        fetchData();
    }, []);

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete);
    };

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!');
    };
    // const goBack = async () => {
    //     if (!canGoBack) return
    //     const newIndex = currentIndex + 1
    //     updateCurrentIndex(newIndex)
    //     await childRefs[newIndex].current.restoreCard()
    // }

    return (
        <>
            {/* <div className='buttons'>
                <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('left')}>Swipe left!</button>
                <button style={{ backgroundColor: !canGoBack && '#c3c4d3' }} onClick={() => goBack()}>Undo swipe!</button>
                <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('right')}>Swipe right!</button>
            </div> */}

            <div className="flex justify-center w-full h-[500px] items-center">
                {people.map((character) => (
                    <TinderCard
                        className="swipe absolute flex justify-center items-center"
                        key={character.name}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => swiped(dir, character.name)}
                        onCardLeftScreen={() => outOfFrame(character.name)}
                    >
                        <div
                            style={{ backgroundImage: `url(${character.url})` }}
                            className="card relative bg-white w-[600px] p-[20px] h-[50vh] bg-cover bg-center rounded-xl shadow-2xl border-red-500"
                        >
                            <h3 className="text-white">{character.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </>

    );
}

export default TinderCards;
