import { Box, FlatList } from "native-base";
import React from "react";
import MvpCard from "../../../../components/MvpCard";

interface GeneralProps {
    mvps: Mvp[];
    selectedMvp: (mvp: Mvp) => void;
}
const General = ({ mvps, selectedMvp }: GeneralProps) => {
    return (
        <Box flex={1} pt={4} pb={4} px={4}  >
            <FlatList
                style={{ flex: 1 }}
                data={mvps}
                keyExtractor={(item) => item.name}
                initialNumToRender={3}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
                renderItem={({ item, index }) => (
                    <MvpCard key={index} mvp={item} onPress={() => selectedMvp(item)} />
                )}

            />
        </Box>
    )
}

export { General };