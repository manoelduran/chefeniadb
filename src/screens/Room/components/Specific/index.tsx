import { Box, FlatList } from "native-base";
import React from "react";
import MvpCard from "../../../../components/MvpCard";

interface SpecificProps {
    specificMvps: Mvp[]
    selectedMvp: (mvp: Mvp) => void;
}
const Specific = ({ specificMvps, selectedMvp }: SpecificProps) => {
    return (
        <Box flex={1} pt={4} pb={4} px={4} bgColor="blue.500" >
            <FlatList
                style={{ flex: 1 }}
                data={specificMvps}
                keyExtractor={(item) => item.name}
                contentContainerStyle={{ paddingBottom: 100 }}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <MvpCard key={index} mvp={item} onPress={() => selectedMvp(item)} />
                )}
            />
        </Box>
    )
}

export { Specific };