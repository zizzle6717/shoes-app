"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (data) => {
    const objectAsArray = [];
    Object.keys(data).forEach((key) => {
        objectAsArray.push(key, data[key]);
    });
    return objectAsArray;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVydE9iamVjdFRvQXJyYXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb252ZXJ0T2JqZWN0VG9BcnJheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGtCQUFlLENBQUMsSUFBSSxFQUFFLEVBQUU7SUFDdEIsTUFBTSxhQUFhLEdBQWEsRUFBRSxDQUFDO0lBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7UUFDaEMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPLGFBQWEsQ0FBQztBQUN2QixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoZGF0YSkgPT4ge1xuICBjb25zdCBvYmplY3RBc0FycmF5OiBzdHJpbmdbXSA9IFtdO1xuICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBvYmplY3RBc0FycmF5LnB1c2goa2V5LCBkYXRhW2tleV0pO1xuICB9KTtcbiAgcmV0dXJuIG9iamVjdEFzQXJyYXk7XG59O1xuIl19