<script>
	import '@carbon/styles/css/styles.css';
	import '@carbon/charts/styles.css';
	import { Header, Tile, Content, Grid, Row, Column, Breakpoint } from 'carbon-components-svelte';
	import { LineChart } from '@carbon/charts-svelte';

	const data = [
		{
			group: 'my room',
			key: 1,
			value: 100
		},
		{
			group: 'my room',
			key: 2,
			value: 110
		},
		{
			group: 'my room',
			key: 3,
			value: 140
		},
		{
			group: 'my room',
			key: 4,
			value: 300
		}
	];
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
</script>

<svelte:head>
	<link rel="stylesheet" href="https://unpkg.com/carbon-components-svelte/css/g100.css" />
</svelte:head>

<Header company="Raul" platformName="temp dashboard" />
<Content>
	<h1 class="title">Welcome</h1>
	<Breakpoint />
	<Grid>
		<Row>
			<Column>
				<div class="spacer">
					<Tile>
						<LineChart theme="g100" {data} {options} />
					</Tile>
				</div>
			</Column>
			<Column>
				<div class="spacer">
					<Tile>
						<p>howdy</p>
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
