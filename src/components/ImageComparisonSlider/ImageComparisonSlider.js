import React from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { Box } from '@chakra-ui/react';

const ImageComparisonSlider = ({ beforeImage, afterImage }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="lg">
      <ReactCompareSlider
        itemOne={<ReactCompareSliderImage src={beforeImage} alt="Before" />}
        itemTwo={<ReactCompareSliderImage src={afterImage} alt="After" />}
      />
    </Box>
  );
};

export default ImageComparisonSlider;
