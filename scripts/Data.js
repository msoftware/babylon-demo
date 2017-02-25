var Data = (function () {
    function Data() {
    }
    Data.XYZSize = function () {
        return new BABYLON.Vector3(Data.XSize, Data.YSize, Data.ZSize);
    };
    return Data;
}());
Data.XSize = 0.7;
Data.YSize = 0.3;
Data.ZSize = 0.7;
Data.XSBarrel = '{"positions":[6,3,31,18,3,26,18,75,26,6,75,31,-6,3,31,-6,75,31,-18,3,26,-18,75,26,-26,3,18,-26,75,18,-31,3,6,-31,75,6,-31,3,-6,-31,75,-6,-26,3,-18,-26,75,-18,26,75,18,26,3,18,31,75,6,31,3,6,31,75,-6,31,3,-6,26,75,-18,26,3,-18,18,75,-26,18,3,-26,6,75,-31,6,3,-31,-6,75,-31,-6,3,-31,-18,75,-26,-18,3,-26,-26,75,-18,-31,75,-6,-17,75,0,-12,75,-12,-18,75,-26,-6,75,-31,0,75,-17,6,75,-31,18,75,-26,12,75,-12,26,75,-18,31,75,-6,17,75,0,31,75,6,-31,75,6,-12,75,12,-26,75,18,-18,75,26,0,75,17,-6,75,31,6,75,31,12,75,12,18,75,26,26,75,18,0,75,17,12,75,12,12,93,12,0,93,17,17,93,0,17,75,0,12,93,-12,12,75,-12,-12,75,12,-12,93,12,0,93,-17,0,75,-17,-12,93,-12,-12,75,-12,-17,93,0,-17,75,0,-12,93,12,0,93,17,0,93,0,12,93,12,17,93,0,12,93,-12,-17,93,0,-12,93,-12,0,93,-17,-26,3,-18,-18,3,-18,-26,3,0,-31,3,-6,-18,3,-26,-6,3,-31,0,3,-26,6,3,-31,18,3,-26,18,3,-18,26,3,-18,31,3,-6,26,3,0,31,3,6,-31,3,6,-18,3,18,-26,3,18,-18,3,26,0,3,26,-6,3,31,6,3,31,18,3,18,18,3,26,26,3,18,0,3,26,0,-15,26,18,-15,18,18,3,18,26,-15,0,26,3,0,18,-15,-18,18,3,-18,-18,3,18,-18,-15,18,0,-15,-26,0,3,-26,-18,-15,-18,-18,3,-18,-26,-15,0,-26,3,0,-18,-15,18,0,-15,0,0,-15,26,18,-15,18,26,-15,0,18,-15,-18,-26,-15,0,-18,-15,-18,0,-15,-26],"indices":[129,122,126,128,122,129,127,122,128,121,122,127,126,122,125,125,122,124,124,122,123,123,122,121,113,114,120,114,119,120,120,119,118,119,117,118,118,117,116,117,115,116,116,115,112,115,111,112,106,114,113,105,106,113,112,111,110,111,109,110,110,109,108,109,107,108,108,107,105,107,106,105,94,93,104,93,102,104,104,102,103,103,102,101,102,99,101,101,99,100,100,99,98,99,96,98,98,96,97,97,96,95,96,83,95,95,83,84,92,93,94,90,93,92,91,90,92,89,90,91,87,90,89,88,87,89,86,87,88,82,87,86,85,82,86,81,82,85,84,83,81,83,82,81,74,80,77,74,79,80,74,78,79,74,72,78,74,77,76,74,76,75,74,75,73,74,73,72,70,65,71,65,64,71,70,71,69,68,70,69,68,69,67,66,68,67,66,67,63,62,66,63,65,59,64,59,56,64,62,63,61,60,62,61,60,61,57,58,60,57,59,58,56,58,57,56,53,44,55,44,45,55,53,55,54,53,54,52,50,53,52,50,52,51,50,51,49,47,50,49,47,49,48,47,48,46,34,47,46,34,46,33,44,43,45,44,41,43,41,42,43,41,40,42,41,38,40,38,39,40,38,37,39,38,35,37,35,36,37,35,32,36,35,34,32,34,33,32,15,14,31,30,15,31,30,31,29,28,30,29,28,29,27,26,28,27,26,27,25,24,26,25,24,25,23,22,24,23,22,23,21,20,22,21,20,21,19,18,20,19,18,19,17,16,18,17,16,17,1,2,16,1,15,13,14,13,12,14,13,11,12,11,10,12,11,9,10,9,8,10,9,7,8,7,6,8,7,5,6,5,4,6,5,3,4,3,0,4,3,2,0,2,1,0],"normals":[20,0,98,56,0,83,56,0,83,20,0,98,-20,0,98,-20,0,98,-56,0,83,-56,0,83,-83,0,56,-83,0,56,-98,0,20,-98,0,20,-98,0,-20,-98,0,-20,-83,0,-56,-83,0,-56,83,0,56,83,0,56,98,0,20,98,0,20,98,0,-20,98,0,-20,83,0,-56,83,0,-56,56,0,-83,56,0,-83,20,0,-98,20,0,-98,-20,0,-98,-20,0,-98,-56,0,-83,-56,0,-83,0,100,0,0,100,0,0,100,0,0,100,0,0,100,0,0,100,0,0,100,0,0,100,0,0,100,0,0,100,0,0,100,0,0,100,0,0,100,0,0,100,0,0,100,0,0,100,0,0,100,0,0,100,0,0,100,0,0,100,0,0,100,0,0,100,0,0,100,0,0,100,0,0,0,100,71,0,71,71,0,71,0,0,100,100,0,0,100,0,0,71,0,-71,71,0,-71,-71,0,71,-71,0,71,0,0,-100,0,0,-100,-71,0,-71,-71,0,-71,-100,0,0,-100,0,0,0,100,0,0,100,0,0,100,0,0,100,0,0,100,0,0,100,0,0,100,0,0,100,0,0,100,0,0,-100,0,0,-100,0,0,-100,0,0,-100,0,0,-100,0,0,-100,0,0,-100,0,0,-100,0,0,-100,0,0,-100,0,0,-100,0,0,-100,0,0,-100,0,0,-100,0,0,-100,0,0,-100,0,0,-100,0,0,-100,0,0,-100,0,0,-100,0,0,-100,0,0,-100,0,0,-100,0,0,-100,0,0,0,100,0,0,100,71,0,71,71,0,71,100,0,0,100,0,0,71,0,-71,71,0,-71,-71,0,71,-71,0,71,0,0,-100,0,0,-100,-71,0,-71,-71,0,-71,-100,0,0,-100,0,0,0,-100,0,0,-100,0,0,-100,0,0,-100,0,0,-100,0,0,-100,0,0,-100,0,0,-100,0,0,-100,0]}';
Data.SBarrel = '{"positions":[-16,75,7,-7,75,16,-7,93,16,-16,93,7,7,93,16,7,75,16,16,93,7,16,75,7,-16,75,-7,-16,93,-7,16,93,-7,16,75,-7,7,93,-16,7,75,-16,-7,93,-16,-7,75,-16,-16,93,-7,-16,93,7,0,93,0,-7,93,16,7,93,16,16,93,7,-7,93,-16,7,93,-16,16,93,-7,-16,75,77,-7,75,86,-7,93,86,-16,93,77,7,93,86,7,75,86,16,93,77,16,75,77,-16,75,63,-16,93,63,16,93,63,16,75,63,7,93,54,7,75,54,-7,93,54,-7,75,54,-16,93,63,-16,93,77,0,93,70,-7,93,86,7,93,86,16,93,77,-7,93,54,7,93,54,16,93,63,54,75,7,63,75,16,63,93,16,54,93,7,77,93,16,77,75,16,86,93,7,86,75,7,54,75,-7,54,93,-7,86,93,-7,86,75,-7,77,93,-16,77,75,-16,63,93,-16,63,75,-16,54,93,-7,54,93,7,70,93,0,63,93,16,77,93,16,86,93,7,63,93,-16,77,93,-16,86,93,-7,54,75,77,63,75,86,63,93,86,54,93,77,77,93,86,77,75,86,86,93,77,86,75,77,54,75,63,54,93,63,86,93,63,86,75,63,77,93,54,77,75,54,63,93,54,63,75,54,54,93,63,54,93,77,70,93,70,63,93,86,77,93,86,86,93,77,63,93,54,77,93,54,86,93,63,-21,3,72,-2,3,91,-2,75,91,-21,75,72,-31,3,48,-31,75,48,-31,3,22,-31,75,22,-21,3,-2,-21,75,-2,-2,3,-21,-2,75,-21,22,3,-31,22,75,-31,48,3,-31,48,75,-31,22,75,101,22,3,101,48,75,101,48,3,101,72,75,91,72,3,91,91,75,72,91,3,72,101,75,48,101,3,48,101,75,22,101,3,22,91,75,-2,91,3,-2,72,75,-21,72,3,-21,48,75,-31,22,75,-31,35,75,35,72,75,-21,91,75,-2,101,75,22,101,75,48,91,75,72,72,75,91,48,75,101,-2,75,-21,-21,75,-2,-31,75,22,-31,75,48,-21,75,72,-2,75,91,22,75,101,48,3,-31,56,3,-16,14,3,-16,22,3,-31,72,3,-21,91,3,-2,86,3,14,101,3,22,101,3,48,86,3,56,91,3,72,72,3,91,56,3,86,48,3,101,-2,3,-21,-16,3,14,-21,3,-2,-31,3,22,-16,3,56,-31,3,48,-21,3,72,14,3,86,-2,3,91,22,3,101,-16,3,56,-16,-15,56,14,-15,86,14,3,86,56,-15,86,56,3,86,86,-15,56,86,3,56,-16,3,14,-16,-15,14,86,-15,14,86,3,14,56,-15,-16,56,3,-16,14,-15,-16,14,3,-16,-16,-15,14,35,-15,35,-16,-15,56,14,-15,86,56,-15,86,86,-15,56,14,-15,-16,56,-15,-16,86,-15,14],"indices":[197,190,194,196,190,197,195,190,196,189,190,195,194,190,193,193,190,192,192,190,191,191,190,189,181,182,188,182,187,188,188,187,186,187,185,186,186,185,184,185,183,184,184,183,180,183,179,180,174,182,181,173,174,181,180,179,178,179,177,178,178,177,176,177,175,176,176,175,173,175,174,173,162,161,172,161,170,172,172,170,171,171,170,169,170,167,169,169,167,168,168,167,166,167,164,166,166,164,165,165,164,163,164,151,163,163,151,152,160,161,162,158,161,160,159,158,160,157,158,159,155,158,157,156,155,157,154,155,156,150,155,154,153,150,154,149,150,153,152,151,149,151,150,149,134,141,148,134,148,147,134,147,146,134,146,145,134,145,144,134,144,143,134,143,142,134,142,133,134,140,141,134,139,140,134,138,139,134,137,138,134,136,137,134,135,136,134,132,135,134,133,132,115,114,131,130,115,131,130,131,129,128,130,129,128,129,127,126,128,127,126,127,125,124,126,125,124,125,123,122,124,123,122,123,121,120,122,121,120,121,119,118,120,119,118,119,117,116,118,117,116,117,101,102,116,101,115,113,114,113,112,114,113,111,112,111,110,112,111,109,110,109,108,110,109,107,108,107,106,108,107,105,106,105,104,106,105,103,104,103,100,104,103,102,100,102,101,100,93,99,96,93,98,99,93,97,98,93,91,97,93,96,95,93,95,94,93,94,92,93,92,91,89,84,90,84,83,90,89,90,88,87,89,88,87,88,86,85,87,86,85,86,82,81,85,82,84,78,83,78,75,83,81,82,80,79,81,80,79,80,76,77,79,76,78,77,75,77,76,75,68,74,71,68,73,74,68,72,73,68,66,72,68,71,70,68,70,69,68,69,67,68,67,66,64,59,65,59,58,65,64,65,63,62,64,63,62,63,61,60,62,61,60,61,57,56,60,57,59,53,58,53,50,58,56,57,55,54,56,55,54,55,51,52,54,51,53,52,50,52,51,50,43,49,46,43,48,49,43,47,48,43,41,47,43,46,45,43,45,44,43,44,42,43,42,41,39,34,40,34,33,40,39,40,38,37,39,38,37,38,36,35,37,36,35,36,32,31,35,32,34,28,33,28,25,33,31,32,30,29,31,30,29,30,26,27,29,26,28,27,25,27,26,25,18,24,21,18,23,24,18,22,23,18,16,22,18,21,20,18,20,19,18,19,17,18,17,16,14,9,15,9,8,15,14,15,13,12,14,13,12,13,11,10,12,11,10,11,7,6,10,7,9,3,8,3,0,8,6,7,5,4,6,5,4,5,1,2,4,1,3,2,0,2,1,0],"normals":[-92,0,38,-38,0,92,-38,0,92,-92,0,38,38,0,92,38,0,92,92,0,38,92,0,38,-92,0,-38,-92,0,-38,92,0,-38,92,0,-38,38,0,-92,38,0,-92,-38,0,-92,-38,0,-92,0,100,0,0,100,0,0,100,0,0,100,0,0,100,0,0,100,0,0,100,0,0,100,0,0,100,0,-92,0,38,-38,0,92,-38,0,92,-92,0,38,38,0,92,38,0,92,92,0,38,92,0,38,-92,0,-38,-92,0,-38,92,0,-38,92,0,-38,38,0,-92,38,0,-92,-38,0,-92,-38,0,-92,0,100,0,0,100,0,0,100,0,0,100,0,0,100,0,0,100,0,0,100,0,0,100,0,0,100,0,-92,0,38,-38,0,92,-38,0,92,-92,0,38,38,0,92,38,0,92,92,0,38,92,0,38,-92,0,-38,-92,0,-38,92,0,-38,92,0,-38,38,0,-92,38,0,-92,-38,0,-92,-38,0,-92,0,100,0,0,100,0,0,100,0,0,100,0,0,100,0,0,100,0,0,100,0,0,100,0,0,100,0,-92,0,38,-38,0,92,-38,0,92,-92,0,38,38,0,92,38,0,92,92,0,38,92,0,38,-92,0,-38,-92,0,-38,92,0,-38,92,0,-38,38,0,-92,38,0,-92,-38,0,-92,-38,0,-92,0,100,0,0,100,0,0,100,0,0,100,0,0,100,0,0,100,0,0,100,0,0,100,0,0,100,0,-83,0,56,-56,0,83,-56,0,83,-83,0,56,-98,0,20,-98,0,20,-98,0,-20,-98,0,-20,-83,0,-56,-83,0,-56,-56,0,-83,-56,0,-83,-20,0,-98,-20,0,-98,20,0,-98,20,0,-98,-20,0,98,-20,0,98,20,0,98,20,0,98,56,0,83,56,0,83,83,0,56,83,0,56,98,0,20,98,0,20,98,0,-20,98,0,-20,83,0,-56,83,0,-56,56,0,-83,56,0,-83,0,100,0,0,100,0,0,100,0,0,100,0,0,100,0,0,100,0,0,100,0,0,100,0,0,100,0,0,100,0,0,100,0,0,100,0,0,100,0,0,100,0,0,100,0,0,100,0,0,100,0,0,-100,0,0,-100,0,0,-100,0,0,-100,0,0,-100,0,0,-100,0,0,-100,0,0,-100,0,0,-100,0,0,-100,0,0,-100,0,0,-100,0,0,-100,0,0,-100,0,0,-100,0,0,-100,0,0,-100,0,0,-100,0,0,-100,0,0,-100,0,0,-100,0,0,-100,0,0,-100,0,0,-100,0,-92,0,38,-92,0,38,-38,0,92,-38,0,92,38,0,92,38,0,92,92,0,38,92,0,38,-92,0,-38,-92,0,-38,92,0,-38,92,0,-38,38,0,-92,38,0,-92,-38,0,-92,-38,0,-92,0,-100,0,0,-100,0,0,-100,0,0,-100,0,0,-100,0,0,-100,0,0,-100,0,0,-100,0,0,-100,0]}';
