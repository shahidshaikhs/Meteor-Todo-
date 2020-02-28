<template>
  <div>
    <div @click="isVisible = !isVisible" class="container__subHeading">
      <svg
        v-if="!isVisible"
        version="1.1"
        width="20"
        height="20"
        id="Capa_1"
        x="0px"
        y="0px"
        viewBox="0 0 256 256"
        style="enable-background:new 0 0 256 256;"
        xml:space="preserve"
      >
        <g>
          <g>
            <polygon
              points="79.093,0 48.907,30.187 146.72,128 48.907,225.813 79.093,256 207.093,128 		"
            />
          </g>
        </g>
      </svg>
      <svg
        v-if="isVisible"
        version="1.1"
        id="Capa_1"
        x="0px"
        y="0px"
        width="20"
        height="20"
        viewBox="0 0 306 306"
        style="enable-background:new 0 0 306 306;"
        xml:space="preserve"
      >
        <g>
          <g id="expand-more">
            <polygon points="270.3,58.65 153,175.95 35.7,58.65 0,94.35 153,247.35 306,94.35 		" />
          </g>
        </g>
      </svg>
      <h2>On Going</h2>
    </div>
    <div v-if="isVisible">
      <div v-for="(item, index) in todoItems" :key="index">
        <div v-if="item.status === 'pending'" class="container__todoItem">
          <h2>{{item.title}}</h2>
          <div class="container__todoItem--actions">
            <svg
              @click="deleteTodo(item.id)"
              class="close"
              version="1.1"
              viewBox="0 0 357 357"
              style="enable-background:new 0 0 357 357;"
              xml:space="preserve"
            >
              <g>
                <g id="close">
                  <polygon
                    points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3
                   214.2,178.5"
                  />
                </g>
              </g>
            </svg>
            <svg
              @click="later(item.id)"
              class="pause"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 298.667 298.667"
              xml:space="preserve"
            >
              <g>
                <g>
                  <g>
                    <rect x="192" y="0" width="85.333" height="298.667" />
                    <rect x="21.333" y="0" width="85.333" height="298.667" />
                  </g>
                </g>
              </g>
            </svg>
            <svg
              @click="done(item.id)"
              class="done"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 375.147 375.147"
              style="enable-background:new 0 0 375.147 375.147;"
              xml:space="preserve"
            >
              <g>
                <g>
                  <polygon
                    points="344.96,44.48 119.147,270.293 30.187,181.333 0,211.52 119.147,330.667 375.147,74.667 		"
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OnGoing",
  data() {
    return { isVisible: true };
  },
  methods: {
    done(id) {
      this.$emit("done", id);
    },
    later(id) {
      this.$emit("later", id);
    },
    deleteTodo(id) {
      this.$emit("deleteTodo", id);
    }
  },
  props: ["todoItems"]
};
</script>
