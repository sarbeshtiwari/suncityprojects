declare module 'indian-states-cities' {
  interface IndianStatesCities {
    allStates(): string[];
    allCities(): string[];
    allCapitals(): Array<{city: string, state: string}>;
    citiesForState(state: string): string[];
    stateForCity(cityName: string): string[];
    capitalOf(state: string): string[];
  }
  
  const indianStatesCities: IndianStatesCities;
  export = indianStatesCities;
}
