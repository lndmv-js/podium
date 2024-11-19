<template>
	<base-layout :page-title="title">
		<div class="purchases__item" v-for="item in 20" :key="item">
			<div class="purchases__item-content">
				<div class="purchases__item-date">01.08.2024</div>
				<div class="purchases__item-title">Покупка в BURBERRY</div>
			</div>
			<div class="purchases__item-grade">
				<div class="purchases__item-grade-value">+120</div>
				<div class="purchases__item-grade-title">баллов</div>
			</div>
		</div>
	</base-layout>
</template>

<script>
export default {
	data() {
		return {
			title: 'ваши покупки'
		}
	}
}
</script>