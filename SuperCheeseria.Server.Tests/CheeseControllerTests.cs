using Microsoft.AspNetCore.Mvc;
using SuperCheeseriaApi.Controllers;
using SuperCheeseriaApi.Models;

namespace SuperCheeseria.Server.Tests
{
    [TestFixture]
    public class CheeseControllerTests
    {
        private CheeseController _controller;

        [SetUp]
        public void Setup()
        {
            _controller = new CheeseController();
        }

        [Test]
        public void GetAll_ReturnsListOfCheeses()
        {
            // Act
            var result = _controller.Get();

            // Assert
            Assert.IsInstanceOf<IEnumerable<Cheese>>(result);
        }

        [Test]
        public void GetById_WithValidId_ReturnsCheese()
        {
            // Arrange
            int validId = 1;

            // Act
            var result = _controller.Get(validId);

            // Assert
            Assert.IsInstanceOf<Cheese>(result.Value);
        }

        [Test]
        public void GetById_WithInvalidId_ReturnsNotFoundResult()
        {
            // Arrange
            int invalidId = -1;

            // Act
            var result = _controller.Get(invalidId);

            // Assert
            Assert.IsInstanceOf<NotFoundResult>(result.Result);
        }
    }
}