export default function findPalette(id) {
    return seedColors.find(function(palette) {
      return palette.id === id;
    });