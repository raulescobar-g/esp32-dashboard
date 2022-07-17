<script>
	import '@carbon/styles/css/styles.css';
	import '@carbon/charts/styles.css';
	import { Header, Tile, Content, Grid, Row, Column, Breakpoint } from 'carbon-components-svelte';
	import { LineChart } from '@carbon/charts-svelte';

	export let data;

	const formattedData = data?.map((t) => {
		return {
			group: t?.location,
			key: t?.datetime,
			value: t?.temp
		};
	});

	const options = {
		title: 'Temps',
		axes: {
			bottom: {
				title: 'time',
				mapsTo: 'key',
				scaleType: 'labels'
			},
			left: {
				mapsTo: 'value',
				title: 'F',
				scaleType: 'linear'
			}
		},
		height: '400px',
		width: '800px'
	};

	// can update later to have themeing
	// let theme = "white"; // "white" | "g10" | "g80" | "g90" | "g100"
	// $: document.documentElement.setAttribute("theme", theme);
</script>

<Header company="Raul" platformName="temp dashboard" />
<Content>
	<h1 class="title">Welcome</h1>
	<Breakpoint />
	<Grid>
		<Row>
			<Column>
				<div class="spacer">
					<Tile>
						<LineChart theme="g100" data={formattedData} {options} />
					</Tile>
				</div>
			</Column>
			<Column>
				<div class="spacer">
					<Tile>
						<p>hi</p>
					</Tile>
				</div>
			</Column>
		</Row>
	</Grid>
</Content>

<style>
	h1.title {
		margin-bottom: 2rem;
	}
	div.spacer {
		margin-bottom: 1rem;
	}
</style>
