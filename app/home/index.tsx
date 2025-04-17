import MainSlideShow from '@/presentation/components/movies/MainSlideShow';
import MoviesHorizontalList from '@/presentation/components/movies/MoviesHorizontalList';
import { useMovies } from '@/presentation/hooks/useMovies';
import { View, Text, ActivityIndicator, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = () => {
    const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } = useMovies();
    const safeArea = useSafeAreaInsets();

    if (nowPlayingQuery.isLoading) {
        return (
            <View className="justify-center items-center flex-1">
                <ActivityIndicator color="purple" size={40} />
            </View>
        )
    }

    return (
        <ScrollView>

            <View className="mt-2 pb-10" style={{ paddingTop: safeArea.top }}>
                <Text className="text-3xl font-bold px-4 mb-2">
                    HomeScreen
                </Text>

                {/* Carrusel de imagenes */}
                <MainSlideShow movies={nowPlayingQuery.data ?? []} />

                {/* peliculas populares */}
                <MoviesHorizontalList
                    title='Populares'
                    movies={popularQuery.data ?? []}
                    className="mb-5"
                />

                {/* Mejor Calificadas */}
                <MoviesHorizontalList
                    title='Mejor Calificadas'
                    movies={topRatedQuery.data ?? []}
                    className="mb-5"
                />

                {/* Próximamente en cines */}
                <MoviesHorizontalList
                    title='Próximamente en cines'
                    movies={upcomingQuery.data ?? []}
                    className="mb-5"
                />

                <MoviesHorizontalList
                    title='Próximamente en cines'
                    movies={upcomingQuery.data ?? []}
                    className="mb-5"
                />
                <MoviesHorizontalList
                    title='Próximamente en cines'
                    movies={upcomingQuery.data ?? []}
                    className="mb-5"
                />

            </View>
        </ScrollView>
    )
}

export default HomeScreen