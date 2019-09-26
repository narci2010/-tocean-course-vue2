<script>
const NotFound = { template: '<p>Page not found</p>' };
const Home = { template: '<p>home page</p>' };
const About = { template: '<p>about page</p>' };

const routes = {
  '/': Home,
  '/aAbout': About,
};
export default {
  data() {
    return { currentRoute: window.location.pathname };
  },
  computed: {
    ViewComponent() {
      console.log(this.currentRoute);
      return routes[this.currentRoute] || NotFound;
    },
  },
  render(h) { return h(this.ViewComponent); },
};
</script>
