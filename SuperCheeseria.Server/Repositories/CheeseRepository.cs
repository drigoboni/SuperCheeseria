using SuperCheeseriaApi.Models;

namespace SuperCheeseriaApi.Repositories
{
    public class CheeseRepository
    {
        private readonly List<Cheese> _cheeses = new List<Cheese>
        {
            new Cheese { Id = 1, Name = "Cheddar", PricePerKilo = 15, Color = "Yellow", Image = "https://www.cheese.com/media/img/cheese/wiki/cheddar.jpg" },
            new Cheese { Id = 2, Name = "Brie", PricePerKilo = 20, Color = "White", Image = "https://www.cheese.com/media/img/cheese/Brie_PDCo3RG.jpg" },
            new Cheese { Id = 3, Name = "Gouda", PricePerKilo = 12, Color = "Yellow", Image = "https://www.cheese.com/media/img/cheese/GOUDA_SqYJjRh.jpg" },
            new Cheese { Id = 4, Name = "Blue Cheese", PricePerKilo = 25, Color = "Blue", Image = "https://www.cheese.com/media/img/cheese/blue.jpg" },
            new Cheese { Id = 5, Name = "Parmesan", PricePerKilo = 30, Color = "Yellow", Image = "https://www.cheese.com/media/img/cheese/parmesan_on_wooden_surface.jpg" },
        };

        public IEnumerable<Cheese> GetAll() => _cheeses;

        public Cheese GetById(int id) => _cheeses.FirstOrDefault(c => c.Id == id);

        #region Not Used for this POC, but included for CRUD operations...

        public void Add(Cheese cheese)
        {
            cheese.Id = _cheeses.Max(c => c.Id) + 1;
            _cheeses.Add(cheese);
        }

        public void Update(Cheese cheese)
        {
            var index = _cheeses.FindIndex(c => c.Id == cheese.Id);
            if (index != -1) _cheeses[index] = cheese;
        }

        public void Delete(int id)
        {
            var cheese = _cheeses.FirstOrDefault(c => c.Id == id);
            if (cheese != null) _cheeses.Remove(cheese);
        }

        #endregion
    }
}