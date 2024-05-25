using Microsoft.AspNetCore.Mvc;
using SuperCheeseriaApi.Models;
using SuperCheeseriaApi.Repositories;

namespace SuperCheeseriaApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CheeseController : ControllerBase
    {
        private readonly CheeseRepository _repository = new CheeseRepository();

        [HttpGet]
        public IEnumerable<Cheese> Get() => _repository.GetAll();

        [HttpGet("{id}")]
        public ActionResult<Cheese> Get(int id)
        {
            var cheese = _repository.GetById(id);
            if (cheese == null) return NotFound();
            return cheese;
        }
    }
}
