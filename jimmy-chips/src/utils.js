export const allChips = [
    'Par',
    'Sandy Par',
    'Birdie',
    'One Putt',
    'Eagle',
    'Chip In',
    'Longest Drive', 
    'Closest To The Pin',
    'Out of Bounds',
    'Water',
    'Tree',
    'Sand',
    'Gravedigger',
    'Beer Chip',
    'Snowman',
    'Lost Ball',
    'Club Toss',
    'Three Putt', 
    'Front Tees'
]

export const negChips = [
    'Out of Bounds',
    'Water',
    'Tree',
    'Sand',
    'Gravedigger',
    'Beer Chip',
    'Snowman',
    'Lost Ball',
    'Club Toss',
    'Three Putt', 
    'Front Tees'
]
export const posChips = [
    'Par',
    'Sandy Par',
    'Birdie',
    'One Putt',
    'Eagle',
    'Chip In',
    'Longest Drive', 
    'Closest To The Pin'
]




export const flatten = (arr) => {
    return arr.reduce(function (flat, toFlatten) {
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
      }, []);
}