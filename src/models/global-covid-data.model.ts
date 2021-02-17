export class GlobalCovidData {
	public updated: number = 0;
	public country: string = '';
	public countryInfo: CountryInfo = new CountryInfo();
	public cases: number = 0;
	public todayCases: number = 0;
	public deaths: number = 0;
	public todayDeaths: number = 0;
	public recovered: number = 0;
	public todayRecovered: number = 0;
	public active: number = 0;
	public critical: number = 0;
	public casesPerOneMillion: number = 0;
	public deathsPerOneMillion: number = 0;
	public tests: number = 0;
	public testsPerOneMillion: number = 0;
	public population: number = 0;
	public continent: string = '';
	public oneCasePerPeople: number = 0;
	public oneDeathPerPeople: number = 0;
	public oneTestPerPeople: number = 0;
	public activePerOneMillion: number = 0;
	public recoveredPerOneMillion: number = 0;
	public criticalPerOneMillion: number = 0;
}

export class CountryInfo {
	public _id: number = 0;
	public iso2: string = '';
	public iso3: string = '';
	public lat: number = 0;
	public long: number = 0;
	public flag: string = '';
}