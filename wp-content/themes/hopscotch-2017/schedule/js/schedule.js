const events = [{
  time: '0700',
  events: [{
    title: 'Tester',
    location: 'Market Hall'
  },{
    title: 'Another Test',
    location: 'Marbles'
  },{
    title: 'One More',
    location: 'Church on Morgan'
  }]
},{
  time: '0800',
  events: [{
    title: 'Tester',
    location: 'Market Hall'
  }]
},{
  time: '0900',
  events: [{
    title: 'Tester',
    location: 'Market Hall'
  },{
    title: 'Another Test',
    location: 'Marbles'
  },{
    title: 'One More',
    location: 'Church on Morgan'
  }]
},{
  time: '1000',
  events: [{
    title: 'Tester',
    location: 'Market Hall'
  },{
    title: 'One More',
    location: 'Church on Morgan'
  }]
},{
  time: '1100',
  events: [{
    title: 'Tester',
    location: 'Market Hall'
  }]
},{
  time: '1200',
  events: [{
    title: 'Tester',
    location: 'Market Hall'
  },{
    title: 'Another Test',
    location: 'Marbles'
  },{
    title: 'One More',
    location: 'Church on Morgan'
  }]
},{
  time: '1300',
  events: [{
    title: 'Tester',
    location: 'Market Hall'
  },{
    title: 'One More',
    location: 'Church on Morgan'
  }]
},{
  time: '1400',
  events: [{
    title: 'Tester',
    location: 'Market Hall'
  },{
    title: 'Another Test',
    location: 'Marbles'
  },{
    title: 'One More',
    location: 'Church on Morgan'
  }]
},{
  time: '1500',
  events: [{
    title: 'Tester',
    location: 'Market Hall'
  },{
    title: 'Another Test',
    location: 'Marbles'
  },{
    title: 'One More',
    location: 'Church on Morgan'
  }]
},{
  time: '1600',
  events: [{
    title: 'Tester',
    location: 'Market Hall'
  },{
    title: 'Another Test',
    location: 'Marbles'
  },{
    title: 'One More',
    location: 'Church on Morgan'
  }]
},{
  time: '1700',
  events: [{
    title: 'Tester',
    location: 'Market Hall'
  },{
    title: 'Another Test',
    location: 'Marbles'
  },{
    title: 'One More',
    location: 'Church on Morgan'
  }]
}];

const AppList = {
  template: `
    <div class="app-list">
      <ul v-for="item of events">
        <li v-for="event of item.events">
          <h3>{{ event.title }}</h3>
          <h5>{{ event.location }}</h5>
        </li>
      </ul>
    </div>
  `,
  data: function() {
    return {
      events
    }
  }
};

const MapView = {
  template: `
    <div class="app-map"></div>
  `
};

const NotFound = {
  template: `
    <div class="not-found">
      <h1>Page not found</h1>
    </div>
  `
};

const routes = {
  '/schedule/#/map': MapView,
  '/schedule/': AppList
}

Vue
  .component('app-map', MapView)
  .component('app-list', AppList);

new Vue({
  el: '#schedule-app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
});
