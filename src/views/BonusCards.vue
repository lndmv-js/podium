<template>
	<base-layout :page-title="title">
		<div class="bonus-card">
			<div class="bonus-card__header">
				<div class="bonus-card__header-logo">
					<img src="/shop-logo.svg" alt="">
				</div>
				<div class="bonus-card__header-count">7 516</div>
			</div>
			<div class="bonus-card__body">
				<div class="bonus-card__body-logo">
					<img src="/shop-logo.svg" alt="">
				</div>

				<div class="bonus-card__body-info">
					<div class="bonus-card__body-balance bonus-card__body-fh">
						<div class="bonus-card__body-title">Баланс счета:</div>
						<div class="bonus-card__body-value">7 516 денег</div>
					</div>

					<div class="bonus-card__body-balance bonus-card__body-fv">
						<div class="bonus-card__body-title bonus-card__body-title--margin">Депозит:</div>
						<div class="bonus-card__body-value">7 000 денег <span>(до 31.12.2024)</span></div>
					</div>

					<div class="bonus-card__body-balance bonus-card__body-fv">
						<div class="bonus-card__body-title bonus-card__body-title--margin">Кешбек:</div>
						<div class="bonus-card__body-value">200 денег <span>(до 31.12.2024)</span></div>
						<div class="bonus-card__body-value">316 денег <span>(до 17.11.2024)</span></div>
					</div>
				</div>
			</div>
			<div class="bonus-card__footer">
				<img src="/qr.svg" alt="">
			</div>
		</div>
	</base-layout>
</template>

<script>
export default {
	data() {
		return {
			title: 'бонусные карты'
		}
	}
}
</script>