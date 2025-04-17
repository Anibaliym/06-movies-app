import { View, Text, useWindowDimensions } from 'react-native'
import React, { useRef } from 'react'
import { Movie } from '@/infrastructure/interfaces/movie.interface'
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import MoviePoster from './MoviePoster';

interface Props {
    movies: Movie[]
}

const MainSlideShow = ({ movies }: Props) => {
    const ref = useRef<ICarouselInstance>(null);
    const widh = useWindowDimensions().width;
    return (
        <View className="h-[250px] w-full">
            <Carousel
                ref={ref}
                data={movies}
                renderItem={({ item }) => (
                    <MoviePoster
                        id={item.id}
                        poster={item.poster}
                        smallPoster={false}
                        className=''
                    />
                )}
                width={200}
                height={350}
                style={{
                    width: widh,
                    height: 350,
                    // backgroundColor: 'red',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                mode='parallax'
                modeConfig={{
                    parallaxAdjacentItemScale: 0.9,
                    parallaxScrollingOffset: 50
                }}
                defaultIndex={1}

            />
        </View>
    )
}

export default MainSlideShow