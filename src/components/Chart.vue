<template>
  <div class="charts">
    <column-chart
      :data="chartData"
      :colors="['#083229']"
      :stacked="true"
      label="Value"
      prefix=""
      suffix=""
      loading="Loading..."
      empty="No data"
    ></column-chart>
  </div>
</template>

<script>
export default {

  name: "chart",

  data: () => ({
    chartData: {
      "2001/2/21": 21,
      "2001/2/22": 10,
      "2001/2/23": 5,
      "2001/2/24": 18,
      "2001/2/26": 8,
      "2001/2/27": 18,
      "2001/2/28": 28,
      "2001/2/29": 8,
      "2001/3/01": 2,
      "2001/4/02": 19,
      "2001/5/03": 9,
      "2001/5/04": 10,
    },
  }),
};
</script>